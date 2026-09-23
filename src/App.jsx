import { useEffect, useReducer } from 'react'
import CustomerOffer from './components/CustomerOffer'
import Dashboard from './components/Dashboard'
import InventoryPanel from './components/InventoryPanel'
import NewGameSetup from './components/NewGameSetup'
import VehicleDetails from './components/VehicleDetails'
import { reducer } from './game/reducer'
import { createInitialState } from './game/state'
import { clearSavedState, loadState, saveState } from './game/storage'

const initialState = () => loadState() || createInitialState()

export default function App() {
  const [state, dispatch] = useReducer(reducer, undefined, initialState)
  const game = state.game
  const selectedVehicle = game?.inventory.find((vehicle) => vehicle.id === game.selectedVehicleId)

  useEffect(() => {
    if (state.game) saveState(state)
  }, [state])

  const resetGame = () => {
    clearSavedState()
    dispatch({ type: 'RESET_GAME' })
  }

  if (!game) return <><NewGameSetup onStart={(setup) => dispatch({ type: 'START_GAME', setup })} /><ErrorBanner message={state.error} /></>

  return <div className="app-shell">
    <Dashboard game={game} onReset={resetGame} />
    <main className="game-main">
      <div className="content-grid">
        <InventoryPanel game={game} onBuy={(vehicleId) => dispatch({ type: 'BUY_VEHICLE', vehicleId })} onSelect={(vehicleId) => dispatch({ type: 'INSPECT_VEHICLE', vehicleId })} />
        <VehicleDetails key={selectedVehicle?.id || 'empty'} vehicle={selectedVehicle} onInspect={(vehicleId) => dispatch({ type: 'INSPECT_VEHICLE', vehicleId })} onPrice={(vehicleId, price) => { dispatch({ type: 'INSPECT_VEHICLE', vehicleId }); dispatch({ type: 'SET_PRICE', vehicleId, price }) }} onOffer={(vehicleId) => dispatch({ type: 'GENERATE_OFFER', vehicleId })} />
        <CustomerOffer offer={game.offer} onAccept={() => dispatch({ type: 'ACCEPT_OFFER' })} onCounter={(amount) => dispatch({ type: 'COUNTER_OFFER', amount })} onReject={() => dispatch({ type: 'REJECT_OFFER' })} />
      </div>
      <aside className="activity-log"><div className="section-heading"><div><p className="eyebrow">The ledger</p><h2>Recent activity</h2></div></div><ol>{game.activity.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)}</ol></aside>
    </main>
    <ErrorBanner message={state.error} />
  </div>
}

function ErrorBanner({ message }) {
  if (!message) return null
  return <div className="error-banner" role="alert">{message}</div>
}