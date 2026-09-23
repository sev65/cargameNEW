import { SAVE_VERSION } from './state'

const STORAGE_KEY = 'lotline-motors-save'

export const loadState = (storage = globalThis.localStorage) => {
  try {
    const raw = storage?.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    return parsed?.version === SAVE_VERSION && parsed.game ? parsed : null
  } catch {
    return null
  }
}

export const saveState = (state, storage = globalThis.localStorage) => {
  try {
    storage?.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // Persistence is a convenience; gameplay should continue if storage is unavailable.
  }
}

export const clearSavedState = (storage = globalThis.localStorage) => storage?.removeItem(STORAGE_KEY)