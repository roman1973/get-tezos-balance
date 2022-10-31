import React, { useEffect } from 'react'
import { toast } from 'react-toastify'

import BalanceList from 'components/balance-list'
import Select from 'common/select'
import ButtonAdd from 'common/button-add'
import { selectHashList } from 'store/hash-list'
import { optionDelete } from 'store/options'

import { selectHash, hashValueReset } from 'store/hash'

import {
  useAppSelector,
  useLogoActionEffect,
  useAppDispatch,
} from 'store/hooks'

import 'react-toastify/dist/ReactToastify.css'

import styles from './home.module.scss'

const Home: React.FC = () => {
  const { value, isLoading, error } = useAppSelector(selectHashList)
  const hash = useAppSelector(selectHash)

  const dispatch = useAppDispatch()

  useLogoActionEffect([isLoading])

  useEffect(() => {
    if (error) {
      toast.error(error.message)

      dispatch(hashValueReset())
    } else if (!isLoading) {
      dispatch(optionDelete(hash.value))
      dispatch(hashValueReset())
    }
  }, [error, value])

  return (
    <main>
      <div className={styles.wrapper}>
        <div className={styles.inputsWrapper}>
          <Select hash={hash.value} />
          <ButtonAdd hash={hash.value.value} />
        </div>
        <BalanceList list={value} />
      </div>
    </main>
  )
}

export default Home
