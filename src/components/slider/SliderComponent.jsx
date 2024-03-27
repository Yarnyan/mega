import React from 'react'
import styles from './Slider.module.scss'
export default function SliderComponent({ image }) {
    console.log(image)
    return (
        <div className={styles.Slider}>
            <img src={image} alt="" />
            <div className={styles.Slider__btn}>
                <button>Подробнее</button>
            </div>
        </div>
    )
}
