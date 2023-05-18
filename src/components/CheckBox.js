import React from 'react'
import styles from './CheckBox.module.css'

export const CheckBox = ({ label }) => {
    return (
        <>
            <div className={styles.checkBoxContainer}>
                <span>{label}</span>

                <label htmlFor='regular'>Regular:</label>
                <label htmlFor='temporario'>Temporário:</label>
                <label htmlFor='meio expediente'>Meio expediente:</label>
                <label htmlFor='estagiário'>Estagiário:</label>


                <input type="radio" id='regular' />
                <input type="radio" id='temporario' />
                <input type="radio" id='meio expediente' />
                <input type="radio" id='estagiário' />

            </div>
        </>
    )
}
