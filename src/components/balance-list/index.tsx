import React from 'react'

import ButtonDelete from 'common/button-delete'
import type { hashList } from 'store/hash-list'
import styles from './balanceList.module.scss'

interface Props {
  list: hashList[]
}

const BalanceList: React.FC<Props> = ({ list }) => (
  <div className={styles.wrapper}>
    {list &&
      list.map((item) => (
        <React.Fragment key={item.hash}>
          <span>{item.hash}</span>
          <span>{item.balance}</span>
          <ButtonDelete hash={item.hash} />
        </React.Fragment>
      ))}
  </div>
)

export default BalanceList
