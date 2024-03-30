import React from 'react'
import styles from './Company.module.scss'
export default function Company() {
    return (
        <div className={styles.Company} id="company">
            <h3>О компании</h3>
            <p><strong>Мегастрой</strong> - сеть магазинов специализирующихся на строительных инструментах и материалах в ЯНАО с 2013 года</p>
        </div>
    )
}
