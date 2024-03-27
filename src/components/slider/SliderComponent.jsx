import React from 'react'
import styles from './Slider.module.scss'
import { Link } from 'react-router-dom'
export default function SliderComponent({ image }) {
    console.log(image)
    return (
        <div className={styles.Slider}>
            <img src={image} alt="" />
            <div className={styles.Slider__btn}>
                <Link to={'https://vk.com/megastroy89'} target="_blank">Подробнее</Link>
            </div>
        </div>
    )
}
