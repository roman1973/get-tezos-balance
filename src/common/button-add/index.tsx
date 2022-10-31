import React, { useCallback } from 'react'
import cn from 'classnames'
import { useAppDispatch } from 'store/hooks'
import { fetchHash } from 'store/hash-list'
import styles from './buttonAdd.module.scss'

interface Props {
  hash?: string
}

const ButtonAdd: React.FC<Props> = ({ hash }) => {
  const dispatch = useAppDispatch()

  const clickHandler = useCallback(() => {
    if (!hash) return

    dispatch(fetchHash(hash))
  }, [hash])

  return (
    <button
      className={cn(styles.addButton, { [styles.active]: hash })}
      type="button"
      onClick={clickHandler}
      disabled={!hash}
    >
      {'Get Balance'}
    </button>
  )
}

export default ButtonAdd
