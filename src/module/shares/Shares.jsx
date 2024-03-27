import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Shares.module.scss';
import { slider, sliderMobile } from '../../data/data';
import SliderComponent from '../../components/slider/SliderComponent';

export default function Shares() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 500);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const slides = isMobile ? sliderMobile : slider;

    return (
        <div className={styles.Shares}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
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
                {slides.map((item) => (
                    <SwiperSlide key={item.id}>
                        <SliderComponent image={item.image} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
