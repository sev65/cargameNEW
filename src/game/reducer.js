import { careers, customers, getById, locations, vehicles } from './content'
import { createGame } from './state'

const addActivity = (game, message) => ({
  ...game,
  activity: [message, ...game.activity].slice(0, 8),
})

const error = (state, message) => ({ ...state, error: message })

const clearError = (state) => ({ ...state, error: '' })

export const reducer = (state, action) => {
  if (action.type === 'START_GAME') {
    const game = createGame(action.setup)
    return game ? { version: state.version, game, error: '' } : error(state, 'Choose a valid starting setup.')
  }

  if (action.type === 'RESET_GAME') return { version: state.version, game: null, error: '' }
  if (!state.game) return error(state, 'Start a new game before taking an action.')

  const game = state.game
  const selectedVehicle = game.inventory.find((vehicle) => vehicle.id === (action.vehicleId || game.selectedVehicleId))

  switch (action.type) {
    case 'NEXT_DAY': {
      const career = getById(careers, game.setup.careerId)
      const location = getById(locations, game.setup.locationId)
      if (!career || !location) return error(state, 'Your dealership setup is incomplete.')
      const dailyExpense = career.dailyExpense || 0
      const nextDay = game.day + 1
      const nextGame = addActivity({
        ...game,
        day: nextDay,
        cash: game.cash - dailyExpense,
        expenses: game.expenses + dailyExpense,
        selectedVehicleId: null,
        offer: null,
      }, `Day ${nextDay} begins in ${location.name}. Daily overhead was $${dailyExpense.toLocaleString()}.`)
      return { ...clearError(state), game: nextGame }
    }
    case 'BUY_VEHICLE': {
      const vehicle = getById(vehicles, action.vehicleId)
      const location = getById(locations, game.setup.locationId)
      const career = getById(careers, game.setup.careerId)
      if (!vehicle || !location || !career) return error(state, 'That vehicle is not available.')
      if (game.inventory.length >= game.capacity) return error(state, 'Your lot is at capacity.')
      if (game.inventory.some((item) => item.id === vehicle.id)) return error(state, 'That vehicle is already in your inventory.')
      const paidPrice = Math.round(vehicle.purchasePrice * (1 - (location.purchaseDiscount || 0)))
      if (game.cash < paidPrice) return error(state, 'You do not have enough cash for that vehicle.')
      const inventoryVehicle = { ...vehicle, paidPrice, inspected: false, listPrice: null }
      const nextGame = addActivity({
        ...game,
        cash: game.cash - paidPrice,
        expenses: game.expenses + paidPrice,
        inventory: [...game.inventory, inventoryVehicle],
        selectedVehicleId: vehicle.id,
        offer: null,
      }, `Bought a ${vehicle.year} ${vehicle.make} ${vehicle.model} for $${paidPrice.toLocaleString()}.`)
      return { ...clearError(state), game: nextGame }
    }
    case 'INSPECT_VEHICLE':
      if (!selectedVehicle) return error(state, 'Select a vehicle to inspect.')
      return { ...clearError(state), game: { ...game, selectedVehicleId: selectedVehicle.id, inventory: game.inventory.map((vehicle) => vehicle.id === selectedVehicle.id ? { ...vehicle, inspected: true } : vehicle) } }
    case 'SET_PRICE': {
      if (!selectedVehicle) return error(state, 'Select a vehicle before setting a price.')
      const listPrice = Number(action.price)
      if (!Number.isFinite(listPrice) || listPrice <= selectedVehicle.paidPrice) return error(state, 'Set a price above your purchase cost.')
      if (listPrice > selectedVehicle.marketValue * 1.5) return error(state, 'That price is too far above market value.')
      return { ...clearError(state), game: { ...game, offer: null, inventory: game.inventory.map((vehicle) => vehicle.id === selectedVehicle.id ? { ...vehicle, listPrice } : vehicle) } }
    }
    case 'GENERATE_OFFER': {
      if (!selectedVehicle) return error(state, 'Select a vehicle before finding a customer.')
      if (!selectedVehicle.listPrice) return error(state, 'Set a sale price before finding a customer.')
      const customer = customers.find((item) => item.preference.includes(selectedVehicle.type)) || customers[game.inventory.length % customers.length]
      const amount = Math.min(selectedVehicle.listPrice, customer.budget)
      const initialOffer = Math.max(selectedVehicle.paidPrice + 250, Math.round(amount * 0.95))
      return { ...clearError(state), game: addActivity({ ...game, offer: { customer, amount: initialOffer, response: 'waiting' } }, `${customer.name} is interested in the ${selectedVehicle.make} ${selectedVehicle.model}.`) }
    }
    case 'COUNTER_OFFER': {
      if (!game.offer || !selectedVehicle) return error(state, 'Generate a customer offer first.')
      const amount = Number(action.amount)
      if (!Number.isFinite(amount) || amount <= selectedVehicle.paidPrice || amount > game.offer.customer.budget) return error(state, 'Your counter must be above cost and within the customer budget.')
      return { ...clearError(state), game: addActivity({ ...game, offer: { ...game.offer, amount, response: 'accepted' } }, `${game.offer.customer.name} accepted your $${amount.toLocaleString()} counter offer.`) }
    }
    case 'REJECT_OFFER':
      if (!game.offer) return error(state, 'There is no active offer to reject.')
      return { ...clearError(state), game: addActivity({ ...game, offer: null }, 'Passed on the customer offer.') }
    case 'ACCEPT_OFFER': {
      if (!game.offer || !selectedVehicle) return error(state, 'Generate an offer before accepting it.')
      const salePrice = game.offer.amount
      const nextGame = addActivity({
        ...game,
        cash: game.cash + salePrice,
        revenue: game.revenue + salePrice,
        inventory: game.inventory.filter((vehicle) => vehicle.id !== selectedVehicle.id),
        selectedVehicleId: null,
        offer: null,
      }, `Sold the ${selectedVehicle.make} ${selectedVehicle.model} for $${salePrice.toLocaleString()}.`)
      return { ...clearError(state), game: nextGame }
    }
    default:
      return state
  }
}