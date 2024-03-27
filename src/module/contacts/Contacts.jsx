import React, { useState, useEffect } from 'react'
import styles from './Contacts.module.scss'
import { AddressData } from '../../data/data'
export default function Contacts() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setIsMobile(window.innerWidth < 500);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
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
                                    <img src="/image/tel.png" alt="" />
                                </div>
                            )
                        })}
                    </div>

                    {isMobile ? (
                        null
                    ) : (
                        <a href="#social" className={styles.Contacts__all}>Все контакты</a>
                    )}
                </div>
            </div>
        </div>
    )
}
