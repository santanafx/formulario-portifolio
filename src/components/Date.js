import React from 'react'
import styles from './Date.module.css'

export const Date = ({ label, setValue, value }) => {
    return (
        <>
            <div className={styles.dateContainer}>
                <label htmlFor='date'>{label}
                    <input onChange={(event) => setValue(event.target.value)} value={value} className={styles.inputDate} type="date" id='date' />
                </label>
            </div>
        </>
    )
}
