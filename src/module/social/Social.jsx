import React from 'react'
import styles from './Social.module.scss'
import { Link } from 'react-router-dom'
export default function Social() {
  return (
    <div className={styles.Social} id="social">
        <div className={styles.Social__container}>
          <h3>Подписывайтесь на наши социальные сети, там вы узнаете о актуальных акциях, ценах и розыгрышах подарков</h3>
          <div className={styles.Social__container_btn}>
            <Link>Вконтакте</Link>
            <Link>Телеграм</Link>
          </div>
        </div>
    </div>
  )
}
