/* eslint no-param-reassign: ["error", { "props": false }] */

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from 'store'
import { loadFromLocalStorage } from 'helpers'

interface LogoActionState {
  value: boolean
}

const initialState = (): LogoActionState => {
  const fromStorage = loadFromLocalStorage('logoAction')
  return (
    (fromStorage as LogoActionState) || {
      value: false,
    }
  )
}

const logoActionSlice = createSlice({
  name: 'logoAction',
  initialState,
  reducers: {
    logoActionSet: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
      localStorage.setItem('logoAction', JSON.stringify(state))
    },
  },
})

export const { logoActionSet } = logoActionSlice.actions

export const selectLogoAction = (state: RootState) => state.logoAction.value

export default logoActionSlice.reducer
