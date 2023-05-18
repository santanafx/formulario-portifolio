import React from 'react'
import styles from './CheckRadio.module.css'

export const CheckRadio = ({ label }) => {
    return (
        <>
            <div className={styles.checkRadioContainer}>
                <span>{label}</span>

                <label htmlFor='regular'>Regular:</label>
                <label htmlFor='temporario'>Temporário:</label>
                <label htmlFor='meio expediente'>Meio expediente:</label>
                <label htmlFor='estagiário'>Estagiário:</label>


                <input type="radio" id='regular' name='radio' />
                <input type="radio" id='temporario' name='radio' />
                <input type="radio" id='meio expediente' name='radio' />
                <input type="radio" id='estagiário' name='radio' />

            </div>
        </>
    )
}
