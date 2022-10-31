/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from 'store'
import { Option } from 'store/options'
import { loadFromLocalStorage } from 'helpers'

interface HashState {
  value: Option
}

const initialState = (): HashState => {
  const fromStorage = loadFromLocalStorage('hash')

  return (fromStorage as HashState) || { value: {} }
}

const hashSlice = createSlice({
  name: 'hash',
  initialState,
  reducers: {
    hashValueUpdate: (state, action: PayloadAction<Option>) => {
      state.value = action.payload

      localStorage.setItem('hash', JSON.stringify(state))
    },
    hashValueReset: (state) => {
      state.value = {}

      localStorage.setItem('hash', JSON.stringify(state))
    },
  },
})

export const { hashValueUpdate, hashValueReset } = hashSlice.actions

export const selectHash = (state: RootState) => state.hash

export default hashSlice.reducer
