import { RootState } from 'store'

export const loadFromLocalStorage = (
  key: string,
): Partial<RootState> | undefined => {
  try {
    const state = localStorage.getItem(key)
    return state ? JSON.parse(state) : undefined
  } catch (e) {
    return undefined
  }
}

export const a = ''
