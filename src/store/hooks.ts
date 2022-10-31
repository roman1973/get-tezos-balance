import { DependencyList, useEffect } from 'react'

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from 'store'
import { logoActionSet } from 'store/logo-action'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useLogoActionEffect = (dependencies?: DependencyList): void => {
  const dispatch = useAppDispatch()

  const deps = dependencies || []

  useEffect(() => {
    dispatch(logoActionSet(true))
    setTimeout(() => dispatch(logoActionSet(false)), 700)
  }, [...deps])
}
