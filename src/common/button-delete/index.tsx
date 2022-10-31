import React from 'react'

import { useAppDispatch } from 'store/hooks'
import { hashListRemove } from 'store/hash-list'
import { optionAdd } from 'store/options'
import { ReactComponent as Close } from 'images/drawer-close.svg'

import styles from './buttonDelete.module.scss'

interface Props {
  hash: string
}

const ButtonDelete: React.FC<Props> = ({ hash }) => {
  const dispatch = useAppDispatch()

  const clickHandler = () => {
    if (!hash) return

    dispatch(hashListRemove(hash))
    dispatch(optionAdd({ label: hash, value: hash }))
  }

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.deleteButton}
        type="button"
        onClick={clickHandler}
      >
        <Close />
      </button>
    </div>
  )
}

export default ButtonDelete
