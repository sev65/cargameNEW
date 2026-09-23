import { describe, expect, it } from 'vitest'
import { reducer } from './reducer'
import { createInitialState, normalizeState } from './state'

const setup = { locationId: 'suburb', stateId: 'texas', careerId: 'small-lot' }
const started = () => reducer(createInitialState(), { type: 'START_GAME', setup })

describe('dealership game rules', () => {
  it('starts a game with the selected setup and starting cash', () => {
    const state = started()
    expect(state.game.setup).toEqual(setup)
    expect(state.game.cash).toBe(50000)
    expect(state.game.inventory).toHaveLength(0)
  })

  it('buys a vehicle and prevents buying the same vehicle twice', () => {
    const bought = reducer(started(), { type: 'BUY_VEHICLE', vehicleId: 'civic-2017' })
    expect(bought.game.cash).toBe(41800)
    expect(bought.game.inventory[0].paidPrice).toBe(8200)
    const duplicate = reducer(bought, { type: 'BUY_VEHICLE', vehicleId: 'civic-2017' })
    expect(duplicate.error).toMatch(/already/)
  })

  it('requires a profitable listed price', () => {
    const bought = reducer(started(), { type: 'BUY_VEHICLE', vehicleId: 'civic-2017' })
    const invalid = reducer(bought, { type: 'SET_PRICE', vehicleId: 'civic-2017', price: 8000 })
    expect(invalid.error).toMatch(/above your purchase cost/)
  })

  it('completes a sale and records the financial result', () => {
    let state = reducer(started(), { type: 'BUY_VEHICLE', vehicleId: 'civic-2017' })
    state = reducer(state, { type: 'INSPECT_VEHICLE', vehicleId: 'civic-2017' })
    state = reducer(state, { type: 'SET_PRICE', vehicleId: 'civic-2017', price: 12000 })
    state = reducer(state, { type: 'GENERATE_OFFER', vehicleId: 'civic-2017' })
    state = reducer(state, { type: 'ACCEPT_OFFER' })
    expect(state.game.inventory).toHaveLength(0)
    expect(state.game.revenue).toBe(11400)
    expect(state.game.expenses).toBe(8200)
    expect(state.game.cash).toBe(53200)
  })

  it('supports a counter within the customer budget', () => {
    let state = reducer(started(), { type: 'BUY_VEHICLE', vehicleId: 'tacoma-2018' })
    state = reducer(state, { type: 'INSPECT_VEHICLE', vehicleId: 'tacoma-2018' })
    state = reducer(state, { type: 'SET_PRICE', vehicleId: 'tacoma-2018', price: 22000 })
    state = reducer(state, { type: 'GENERATE_OFFER', vehicleId: 'tacoma-2018' })
    state = reducer(state, { type: 'COUNTER_OFFER', amount: 21000 })
    expect(state.game.offer.amount).toBe(21000)
    expect(state.game.offer.response).toBe('accepted')
  })

  it('advances the day and records daily overhead', () => {
    const initial = started()
    const state = reducer(initial, { type: 'NEXT_DAY' })
    expect(state.game.day).toBe(2)
    expect(state.game.cash).toBe(49200)
    expect(state.game.customers).not.toBe(initial.game.customers)
    expect(state.game.activity[0]).toMatch(/Day 2/)
  })

  it('refreshes and skips market listings', () => {
    const initial = started()
    const refreshed = reducer(initial, { type: 'REFRESH_MARKET' })
    expect(refreshed.game.market).toHaveLength(3)
    expect(refreshed.game.market[0].id).not.toBe(initial.game.market[0].id)
    const skipped = reducer(refreshed, { type: 'SKIP_MARKET' })
    expect(skipped.game.market).toHaveLength(2)
  })

  it('sells a listed vehicle directly at its list price', () => {
    let state = reducer(started(), { type: 'BUY_VEHICLE', vehicleId: 'civic-2017' })
    state = reducer(state, { type: 'SET_PRICE', vehicleId: 'civic-2017', price: 12000 })
    state = reducer(state, { type: 'SELL_VEHICLE', vehicleId: 'civic-2017' })
    expect(state.game.inventory).toHaveLength(0)
    expect(state.game.revenue).toBe(12000)
    expect(state.game.cash).toBe(53800)
  })

  it('normalizes older saves with no market or customer fields', () => {
    const state = started()
    const legacy = normalizeState({ ...state, game: { ...state.game, market: undefined, customers: undefined } })
    expect(legacy.game.market).toHaveLength(3)
    expect(legacy.game.customers.length).toBeGreaterThan(0)
  })
})