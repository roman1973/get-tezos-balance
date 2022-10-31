/* eslint no-param-reassign: ["error", { "props": false }] */

import {
  PayloadAction,
  createSlice,
  createAsyncThunk,
  SerializedError,
} from '@reduxjs/toolkit'
import { TezosToolkit } from '@taquito/taquito'

import { RootState } from 'store'
import { loadFromLocalStorage } from 'helpers'

export type ErrorType = SerializedError | null

export interface hashList {
  hash: string
  balance: number
}

interface HashListState {
  value: Array<hashList>
  isLoading: boolean
  error: ErrorType
}

const initialState = (): HashListState => {
  const fromStorage = loadFromLocalStorage('hashList') as HashListState
  return fromStorage
    ? { ...fromStorage, error: null }
    : {
        value: [],
        isLoading: false,
        error: null,
      }
}

const tezos = new TezosToolkit('https://mainnet-node.madfish.solutions')

export const fetchHash = createAsyncThunk(
  'hashList/fetchHash',
  async (hash: string) => {
    const result = await tezos.tz.getBalance(hash)
    return { hash, balance: result.toNumber() / 1000000 }
  },
)

const hashListSlice = createSlice({
  name: 'hashList',
  initialState,
  reducers: {
    hashListRemove: (state, action: PayloadAction<string>) => {
      state.value = state?.value.filter((item) => item.hash !== action.payload)
      localStorage.setItem('hashList', JSON.stringify(state))
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHash.pending, (state) => {
        state.isLoading = true
        state.error = null
        localStorage.setItem('hashList', JSON.stringify(state))
      })
      .addCase(fetchHash.fulfilled, (state, action) => {
        state.value = [...state.value, action.payload]
        state.isLoading = false
        localStorage.setItem('hashList', JSON.stringify(state))
      })
      .addCase(fetchHash.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error
        localStorage.setItem('hashList', JSON.stringify(state))
      })
  },
})

export const { hashListRemove } = hashListSlice.actions

export const selectHashList = (state: RootState) => state.hashList

export default hashListSlice.reducer
