import React from 'react'
import styles from './Footer.module.scss'
export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.Footer__container}>
        <div className={styles.Footer__container_image}>
          <img src="/image/logofooter.svg" alt="" />
        </div>
        <div>
          <p>© 2024 г. Все права защищены.</p>
        </div>
      </div>
    </div>
  )
}
