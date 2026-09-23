import { useState } from 'react'

const money = (value) => `$${value.toLocaleString()}`

export default function CustomerOffer({ offer, onAccept, onCounter, onReject }) {
  const [counter, setCounter] = useState('')
  if (!offer) return <section className="panel offer-panel empty-detail"><p className="eyebrow">Customer desk</p><h2>No active customer</h2><p>List a vehicle to see who walks through the door.</p></section>
  return <section className="panel offer-panel">
    <div className="section-heading"><div><p className="eyebrow">Customer desk</p><h2>{offer.customer.name}</h2></div><span className="offer-status">{offer.response === 'accepted' ? 'Counter accepted' : 'New lead'}</span></div>
    <p className="customer-note">Looking for a {offer.customer.preference}. Budget up to <strong>{money(offer.customer.budget)}</strong>.</p>
    <div className="offer-amount"><span>Current offer</span><strong>{money(offer.amount)}</strong></div>
    <div className="offer-actions"><button className="button button-primary" type="button" onClick={onAccept}>Accept offer</button><button className="button button-quiet" type="button" onClick={onReject}>Walk away</button></div>
    <div className="counter-form"><label htmlFor="counter-price">Counter offer</label><div className="input-action"><input id="counter-price" type="number" value={counter} onChange={(event) => setCounter(event.target.value)} placeholder={offer.amount.toString()} /><button className="button button-secondary" type="button" onClick={() => onCounter(counter)}>Send counter</button></div></div>
  </section>
}