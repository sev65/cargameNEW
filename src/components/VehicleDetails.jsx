import { useState } from 'react'

const money = (value) => `$${value.toLocaleString()}`

export default function VehicleDetails({ vehicle, onInspect, onPrice, onOffer }) {
  const [marketPercent, setMarketPercent] = useState(vehicle ? Math.round(((vehicle.listPrice || vehicle.marketValue) / vehicle.marketValue) * 100) : 100)

  if (!vehicle) return <section className="panel detail-panel empty-detail"><p className="eyebrow">Vehicle desk</p><h2>Select a vehicle</h2><p>Buy a vehicle, then select it from your inventory to inspect and list it.</p></section>

  const listPrice = Math.round(vehicle.marketValue * marketPercent / 100)

  return <section className="panel detail-panel">
    <div className="section-heading"><div><p className="eyebrow">Vehicle desk</p><h2>{vehicle.year} {vehicle.make} {vehicle.model}</h2></div><span className="condition-tag">{vehicle.condition}</span></div>
    <div className="vehicle-facts"><div><span>Mileage</span><strong>{vehicle.mileage.toLocaleString()}</strong></div><div><span>Paid</span><strong>{money(vehicle.paidPrice)}</strong></div><div><span>Market</span><strong>{money(vehicle.marketValue)}</strong></div></div>
    <div className="history-box"><div><strong>Vehicle history</strong>{vehicle.inspected ? <span className="inspected">Inspected</span> : <span className="uninspected">Not inspected</span>}</div>{vehicle.inspected ? <dl><div><dt>Owners</dt><dd>{vehicle.history.owners}</dd></div><div><dt>Accidents</dt><dd>{vehicle.history.accidents}</dd></div><div><dt>Flood damage</dt><dd>{vehicle.history.floodDamage ? 'Yes' : 'None reported'}</dd></div><div><dt>Records</dt><dd>{vehicle.history.serviceRecords}</dd></div></dl> : <button className="button button-secondary" type="button" onClick={() => onInspect(vehicle.id)}>Run history report</button>}</div>
    <div className="price-form"><label htmlFor="market-percent">Price as a percentage of market</label><div className="range-line"><input id="market-percent" type="range" min={Math.ceil((vehicle.paidPrice + 1) / vehicle.marketValue * 100)} max="150" value={marketPercent} onChange={(event) => setMarketPercent(Number(event.target.value))} /><output htmlFor="market-percent">{marketPercent}%</output></div><div className="price-preview">Listing at <strong>{money(listPrice)}</strong></div><button className="button button-primary" type="button" onClick={() => onPrice(vehicle.id, listPrice)}>List vehicle</button></div>
    {vehicle.listPrice && <button className="button button-accent full-width" type="button" onClick={() => onOffer(vehicle.id)}>Find a customer</button>}
  </section>
}