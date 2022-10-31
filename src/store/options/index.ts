/* eslint no-param-reassign: ["error", { "props": false }] */

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from 'store'
import { loadFromLocalStorage } from 'helpers'

export interface Option {
  label?: string
  value?: string
  __isNew__?: boolean
}

const optionsDefault: Option[] = [
  'tz1a17ZmuN3yrnFHFyxyxovhVKuoP5YuCdr8',
  'tz1Po3kCvcHJTPBbuntVfUQrwGo7UqDAvLr3',
  'tz1KroYSGkPbXG6mTrtQfDSUjT31vthH7vYS',
  'tz1Q8SvcHjBBihikyoEqg7bFCYwQafEU2iqb',
].map((item) => ({ label: item, value: item }))

interface OptionsState {
  value: Option[]
}

const initialState = (): OptionsState => {
  const fromStorage = loadFromLocalStorage('options')
  return (
    (fromStorage as OptionsState) || {
      value: optionsDefault,
    }
  )
}

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    optionAdd: (state, action: PayloadAction<Option>) => {
      state.value = [...state.value, action.payload]
      localStorage.setItem('options', JSON.stringify(state))
    },
    optionDelete: (state, action: PayloadAction<Option>) => {
      state.value = state.value.filter(
        (item) => item.value !== action.payload.value,
      )
      localStorage.setItem('options', JSON.stringify(state))
    },
  },
})

export const { optionAdd, optionDelete } = optionsSlice.actions

export const selectOptions = (state: RootState) => state.options.value

export default optionsSlice.reducer
