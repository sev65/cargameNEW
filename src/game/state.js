import { careers, createCustomerPool, getById, locations, states, vehicles } from './content'

export const SAVE_VERSION = 1

export const createInitialState = () => ({
  version: SAVE_VERSION,
  game: null,
})

export const createGame = ({ locationId, stateId, careerId }) => {
  const location = getById(locations, locationId)
  const state = getById(states, stateId)
  const career = getById(careers, careerId)

  if (!location || !state || !career) return null

  return {
    setup: { locationId, stateId, careerId },
    day: 1,
    cash: career.startingCash + location.cashBonus,
    revenue: 0,
    expenses: 0,
    inventory: [],
    capacity: career.capacity,
    market: vehicles.slice(0, 3).map((vehicle) => ({ ...vehicle, history: { ...vehicle.history } })),
    customers: createCustomerPool(() => 0),
    selectedVehicleId: null,
    offer: null,
    activity: [`Opened up in ${location.name}, ${state.name}.`],
  }
}

export const normalizeState = (state) => {
  if (!state?.game) return state

  return {
    ...state,
    error: state.error || '',
    game: {
      ...state.game,
      market: Array.isArray(state.game.market) ? state.game.market : vehicles.slice(0, 3).map((vehicle) => ({ ...vehicle, history: { ...vehicle.history } })),
      customers: Array.isArray(state.game.customers) ? state.game.customers : createCustomerPool(() => 0),
      activity: Array.isArray(state.game.activity) ? state.game.activity : [],
    },
  }
}

export const getProfit = (game) => game.revenue - game.expenses