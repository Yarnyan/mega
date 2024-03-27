import React from 'react'
import styles from './Contacts.module.scss'
import { Link } from 'react-router-dom'
import { AddressData } from '../../data/data'
export default function Contacts() {
  return (
    <div className={styles.Contacts}>
        <div className={styles.Contacts__container}>
            <div className={styles.Contacts__container_items}>
                <div className={styles.Contacts__items}>
                    {AddressData.map((item) => {
                        return (
                            <div className={styles.Contacts__item}>
                                <p>{item.subtitle}</p>
                                <span>-</span>
                                <a target='_black' href='tel:+79826157240'>Позвонить</a>
                            </div>
                        )
                    })}
                </div>
                <Link to={'/'} className={styles.Contacts__all}>Все контакты</Link>
            </div>
        </div>
    </div>
  )
}
