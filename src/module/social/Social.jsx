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
          const formattedSubtitle = `${item.city} ${item.address}`;

          return (
            <div className={styles.Contacts__item}>
              <p className='subtitle'>{formattedSubtitle}</p>
              <div>
                <span>-</span>
                <a target='_blank' href={`tel:${item.tel}`} style={{ marginRight: '10px' }}>Позвонить</a>
                {item.tel !== '8(34936)27747' && (
                  <>
                    <span>|</span>
                    <a href={`https://api.whatsapp.com/send?phone=${item.telWhatSapp}`}>
                      Whatsapp
                    </a>
                  </>
                )}
              </div>
            </div>
          );
        })}


        <div className={styles.Contacts__item_kadr}>
          <p>Отдел кадров: Олег Николаевич</p>
          <span>-</span>
          <a target='_black' href='tel:+79826157240' style={{ marginRight: '10px' }}>Позвонить</a>
        </div>
      </div>
    </div>
  )
}
