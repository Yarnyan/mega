import React from 'react'
import styles from './Social.module.scss'
import { Link } from 'react-router-dom'
export default function Social() {
  return (
    <div className={styles.Social} id="social">
        <div className={styles.Social__container}>
          <h3>Подписывайтесь на наши социальные сети, там вы узнаете о актуальных акциях, ценах и розыгрышах подарков</h3>
          <div className={styles.Social__container_btn}>
            <Link to={'https://vk.com/megastroy89'} target='_blank'>Вконтакте</Link>
            <Link to={'https://t.me/megastroy89'} target='_blank'>Телеграм</Link>
          </div>
        </div>
    </div>
  )
}
