import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.Header__container}>
        <div className={styles.Header__container_items}>
          <img src="/image/logo2.png" alt="" />
          <div className={styles.Header__items_nav}>
            <Link to={'/'}>Юридическим лицам</Link>
            <a href='#company'>О компании</a>
          </div>
        </div>
      </div>
    </div>
  )
}
