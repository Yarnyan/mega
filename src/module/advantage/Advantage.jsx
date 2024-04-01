import React from 'react'
import styles from './Advantage.module.scss'
import AdvantageComponent from '../../components/AdvantageCom/AdvantageComponent'
import SliderAdvantageComponent from '../../components/sliderAdvantage/SliderAdvantageComponent';
import { AdvantageData } from '../../data/data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { sliderAdvantageSlider } from '../../data/data';
export default function Advantage() {
    console.log(sliderAdvantageSlider)
    return (
        <div className={styles.Advantage}>
            <div className={styles.Advantage__container}>
                <h3>Почему мы?</h3>
                <div className={styles.Advantage__container_items}>
                    <div className={styles.Advantage__item}>
                        {AdvantageData.map((item) => {
                            return (
                                <AdvantageComponent key={item.id} image={item.image} subtitle={item.subtitle} title={item.title} />
                            )
                        })}
                    </div>
                    <div className="slider__container" style={{ width: '560px', height: '420px', marginLeft: '20px' }}>
    <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
    >
        {sliderAdvantageSlider.map((item) => (
            <SwiperSlide key={item.id}>
                <SliderAdvantageComponent id={item.id} image={item.image} />
            </SwiperSlide>
        ))}
    </Swiper>
</div>

                </div>
            </div>
        </div>
    )
}
