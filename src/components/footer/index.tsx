import styles from './footer.module.scss'

const Footer: React.FC = () => (
  <div className={styles.footerWrapper}>
    <div
      className={styles.address}
    >{`Copyright: © ${new Date().getFullYear()}`}</div>
  </div>
)

export default Footer
