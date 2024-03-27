import React from 'react'
import styles from './Footer.module.scss'
export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.Footer__container}>
        <div className={styles.Footer__container_image}>
          <img src="/image/logo2.png" alt="" />
          <h3>Магазин строительных товаров</h3>
        </div>
        <div>
          <p>© 2023 г. Все права защищены.</p>
        </div>
      </div>
    </div>
  )
}
