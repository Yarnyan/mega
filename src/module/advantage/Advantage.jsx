import React from 'react'
import styles from './Advantage.module.scss'
import AdvantageComponent from '../../components/AdvantageCom/AdvantageComponent'
import { AdvantageData } from '../../data/data'
export default function Advantage() {
  return (
    <div className={styles.Advantage}>
        <div className={styles.Advantage__container}>
            <h3>Почему мы?</h3>
            <div className={styles.Advantage__container_items}>
                <div className={styles.Advantage__item}>
                    {AdvantageData.map((item) => {
                        return (
                            <AdvantageComponent key={item.id} image={item.image} subtitle={item.subtitle} title={item.title}/>
                        )
                    })}
                </div>
                <img src="/image/Advantage.png" alt="" style={{marginLeft: '20px'}}/>
            </div>
        </div>
    </div>
  )
}
