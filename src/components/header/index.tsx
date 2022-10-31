import Logo from 'common/logo'

import styles from './header.module.scss'

const Header: React.FC = () => (
  <div className={styles.headerWrapper}>
    <Logo />
    <div className={styles.text}>{'List of accounts balance'}</div>
  </div>
)

export default Header
