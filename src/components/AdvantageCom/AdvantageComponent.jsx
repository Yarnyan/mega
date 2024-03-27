import React from 'react'
import styles from './Advantage.module.scss'
export default function AdvantageComponent({image, title, subtitle}) {
  return (
    <div className={styles.Advantage}>
        <div className={styles.Advantage__container}>
            <img src={image} alt="" />
            <div className={styles.Advantage__container_text}>
                <h4>{title}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    </div>
  )
}
