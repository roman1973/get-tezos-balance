import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import logoActionReducer from 'store/logo-action'
import hashReducer from 'store/hash'
import hashListReducer from 'store/hash-list'
import optionsReducer from 'store/options'

export const store = configureStore({
  reducer: {
    hash: hashReducer,
    hashList: hashListReducer,
    logoAction: logoActionReducer,
    options: optionsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
