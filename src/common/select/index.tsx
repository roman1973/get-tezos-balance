import React from 'react'
import { OnChangeValue } from 'react-select'
import CreatableSelect from 'react-select/creatable'

import { hashValueUpdate } from 'store/hash'
import { selectOptions, Option } from 'store/options'
import { useAppSelector, useAppDispatch } from 'store/hooks'

import styles from './select.module.scss'

interface Props {
  hash: Option
}

const Select: React.FC<Props> = ({ hash }) => {
  const options = useAppSelector(selectOptions)

  const dispatch = useAppDispatch()

  const handleChange = (option: OnChangeValue<Option | string, boolean>) => {
    dispatch(hashValueUpdate(option as Option))
  }

  return (
    <div className={styles.wrapper}>
      <CreatableSelect
        placeholder={options.length ? 'Input or select hash' : 'Input hash'}
        classNamePrefix="react-select"
        value={hash.value ? hash : ''}
        options={options}
        onChange={handleChange}
        isSearchable
        autoFocus
      />
    </div>
  )
}

export default Select
