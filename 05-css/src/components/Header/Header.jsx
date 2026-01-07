import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
      <>
      <header className={styles.Header}>
        This is Header
        <button className={styles.btn}>Login</button>
      </header>
      </>
  )
}

export default Header
