import { useState } from 'react'
import { careers, locations, states } from '../game/content'

export default function NewGameSetup({ onStart }) {
  const [setup, setSetup] = useState({ locationId: 'suburb', stateId: 'texas', careerId: 'small-lot' })
  const update = (key) => (event) => setSetup({ ...setup, [key]: event.target.value })

  return (
    <main className="setup-page">
      <div className="intro-block">
        <p className="eyebrow">A small lot. A clean ledger.</p>
        <h1>Open your doors.</h1>
        <p className="lede">Start with one location, one strategy, and enough nerve to make your first deal.</p>
      </div>
      <form className="setup-form" onSubmit={(event) => { event.preventDefault(); onStart(setup) }}>
        <label>
          Starting location
          <select value={setup.locationId} onChange={update('locationId')}>
            {locations.map((location) => <option value={location.id} key={location.id}>{location.name} · {location.bonus}</option>)}
          </select>
        </label>
        <label>
          State
          <select value={setup.stateId} onChange={update('stateId')}>
            {states.map((state) => <option value={state.id} key={state.id}>{state.name} · {state.bonus}</option>)}
          </select>
        </label>
        <label>
          Career start
          <select value={setup.careerId} onChange={update('careerId')}>
            {careers.map((career) => <option value={career.id} key={career.id}>{career.name} · ${career.startingCash.toLocaleString()} cash</option>)}
          </select>
        </label>
        <button className="button button-primary" type="submit">Open dealership</button>
      </form>
    </main>
  )
}