import React from 'react'
import cn from 'classnames'

import { useAppSelector } from 'store/hooks'
import { selectLogoAction } from 'store/logo-action'
import { ReactComponent as SiteLogo } from 'images/logo.svg'

import styles from './logo.module.scss'

const Logo: React.FC = () => {
  const logoAction = useAppSelector(selectLogoAction)

  return (
    <div
      className={cn(styles.logo, { [styles.action]: logoAction })}
      role="button"
      tabIndex={0}
    >
      <SiteLogo />
    </div>
  )
}

export default Logo
