import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Shares.module.scss';
import { slider } from '../../data/data';
import SliderComponent from '../../components/slider/SliderComponent';

export default function Shares() {
    return (
        <div className={styles.Shares}>
            <Swiper
                  modules={[Navigation, Pagination, Autoplay ]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
            >
                {slider.map((item) => (
                    <SwiperSlide key={item.id}>
                        <SliderComponent image={item.image} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
