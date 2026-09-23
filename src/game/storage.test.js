import { describe, expect, it } from 'vitest'
import { loadState, saveState } from './storage'

const createStorage = (value = null) => ({
  value,
  getItem() { return this.value },
  setItem(key, nextValue) { this.value = nextValue },
})

describe('game storage', () => {
  it('round-trips a save and fills fields from older saves', () => {
    const storage = createStorage()
    const state = { version: 1, game: { day: 1, inventory: [] } }

    saveState(state, storage)

    expect(loadState(storage).game.market).toHaveLength(3)
  })

  it('rejects malformed and incompatible saves', () => {
    expect(loadState(createStorage('{bad json'))).toBeNull()
    expect(loadState(createStorage(JSON.stringify({ version: 99, game: {} })))).toBeNull()
  })
})