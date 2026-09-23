const money = (value) => `$${value.toLocaleString()}`

export default function InventoryPanel({ game, onBuy, onSelect, onRefresh, onSkip }) {
  const available = game.market
  return (
    <section className="panel inventory-panel">
      <div className="section-heading"><div><p className="eyebrow">Acquisition</p><h2>Available vehicles</h2></div><span className="section-count">{available.length} listings</span></div>
      <div className="market-actions"><button className="button button-secondary" type="button" onClick={onRefresh}>Refresh market</button><button className="button button-quiet" type="button" onClick={onSkip} disabled={!available.length}>Skip listing</button></div>
      <div className="vehicle-list">
        {available.map((vehicle) => <article className="vehicle-row" key={vehicle.id}>
          <div><span className="vehicle-year">{vehicle.year} · {vehicle.condition}</span><h3>{vehicle.make} {vehicle.model}</h3><p>{vehicle.mileage.toLocaleString()} miles · Market {money(vehicle.marketValue)}</p></div>
          <div className="vehicle-action"><strong>{money(vehicle.purchasePrice)}</strong><button className="button button-secondary" type="button" onClick={() => onBuy(vehicle.id)}>Buy vehicle</button></div>
        </article>)}
        {!available.length && <p className="empty-state">The market is empty. Refresh the market or advance to the next day.</p>}
      </div>
      {game.inventory.length > 0 && <div className="owned-list"><div className="section-heading"><div><p className="eyebrow">On the lot</p><h2>Your inventory</h2></div></div>{game.inventory.map((vehicle) => <button className={`owned-vehicle ${game.selectedVehicleId === vehicle.id ? 'selected' : ''}`} type="button" key={vehicle.id} onClick={() => onSelect(vehicle.id)}><span><strong>{vehicle.year} {vehicle.make} {vehicle.model}</strong><small>{vehicle.listPrice ? `Listed at ${money(vehicle.listPrice)}` : 'Not listed yet'}</small></span><span className="arrow">→</span></button>)}</div>}
    </section>
  )
}