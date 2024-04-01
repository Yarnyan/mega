import React from 'react'
import styles from '../../module/advantage/Advantage.module.scss'
export default function SliderAdvantageComponent({image, id}) {
  return (
    <img src={image} alt="" className={styles.Advantage__image}/>
  )
}
