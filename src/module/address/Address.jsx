import React from 'react'
import styles from './Address.module.scss'
import { AddressData } from '../../data/data'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
export default function Address() {
    return (
        <div className={styles.Address}>
            <div className={styles.Address__container}>
                <h3>Приходите в наши магазины и узнаете подробнее</h3>
                {AddressData.map((item) => {
                    const formattedSubtitle = `${item.city} ${item.address}`;
                    return (
                        <p>{formattedSubtitle}</p>
                    )
                })}
            </div>
            <div className={styles.Address__map}>
            <YMaps>
                    <Map defaultState={{ center: [64.668880, 77.075313], zoom: 7 }} style={{ width: '100%', height: '500px' }}>
                        {AddressData.map((item) => {
                            return (
                                <Placemark key={item.id} geometry={[item.latitude, item.longitude]} />
                            );
                        })}
                    </Map>
                </YMaps>
            </div>
        </div>
    )
}
