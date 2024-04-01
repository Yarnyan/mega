import React, { useState, useEffect } from 'react';
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
            {slides.map((item) => (
                <SliderComponent image={item.image} />
            ))}
        </div>
    );
}
