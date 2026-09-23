import { careers, getById, locations, states } from '../game/content'
import { getProfit } from '../game/state'

const money = (value) => `$${value.toLocaleString()}`

export default function Dashboard({ game, onReset, onNextDay }) {
  const location = getById(locations, game.setup.locationId)
  const state = getById(states, game.setup.stateId)
  const career = getById(careers, game.setup.careerId)

  return (
    <header className="dashboard-header">
      <div>
        <p className="eyebrow">{career.name} · {location.name}, {state.name}</p>
        <h1>Lotline Motors</h1>
      </div>
      <div className="header-actions">
        <span className="save-status">Day {game.day}</span>
        <button className="button button-secondary" type="button" onClick={() => onReset()}>New game</button>
        <button className="button button-primary" type="button" onClick={() => onNextDay()}>Next day</button>
      </div>
      <div className="metrics" aria-label="Business summary">
        <div><span>Cash</span><strong>{money(game.cash)}</strong></div>
        <div><span>Revenue</span><strong>{money(game.revenue)}</strong></div>
        <div><span>Profit</span><strong className={getProfit(game) >= 0 ? 'positive' : 'negative'}>{money(getProfit(game))}</strong></div>
        <div><span>Lot space</span><strong>{game.inventory.length} / {game.capacity}</strong></div>
      </div>
    </header>
  )
}