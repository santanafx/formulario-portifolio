import React from 'react'
import styles from './Date.module.css'

export const Date = ({ label }) => {
    return (
        <>
            <div className={styles.dateContainer}>
                <label htmlFor='date'>{label}
                    <input className={styles.inputDate} type="date" id='date' />
                </label>
            </div>
        </>
    )
}
