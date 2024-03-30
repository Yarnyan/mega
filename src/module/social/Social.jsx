import React from 'react'
import styles from './Social.module.scss'
import { Link } from 'react-router-dom'
import { AddressData } from '../../data/data'
export default function Social() {
  return (
    <div className={styles.Social} id="social">
      <div className={styles.Social__container}>
        <h3>Все контакты для связи с нами</h3>
        <div className={styles.Social__container_btn}>
          <Link to={'https://vk.com/megastroy89'} target='_blank'>Вконтакте</Link>
          <Link to={'https://t.me/megastroy89'} target='_blank'>Телеграм</Link>
        </div>
      </div>
      <div className={styles.Contacts__items}>
        {AddressData.map((item) => {
          return (
            <div className={styles.Contacts__item}>
              <p>{item.subtitle}</p>
              <span>-</span>
              <a target='_black' href='tel:+79826157240' style={{marginRight: '10px'}}>Позвонить</a> 
              <span>|</span>
              <a href={`https://api.whatsapp.com/send?phone=${item.tel}`}>
                Whatsapp
              </a>
            </div>
          )
        })}
        <div className={styles.Contacts__item_kadr}>
          <p>Кадры : +7 (961) 780-70-70 Олег Николаевич</p>
        </div>
      </div>
    </div>
  )
}
