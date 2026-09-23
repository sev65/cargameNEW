import { careers, getById, locations, states } from './content'

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
    cash: career.startingCash + location.cashBonus,
    revenue: 0,
    expenses: 0,
    inventory: [],
    capacity: career.capacity,
    selectedVehicleId: null,
    offer: null,
    activity: [`Opened up in ${location.name}, ${state.name}.`],
  }
}

export const getProfit = (game) => game.revenue - game.expenses