import React from 'react'
import styles from './CheckRadio.module.css'

export const CheckRadio = ({ label, value, setValue }) => {
    return (
        <>
            <div className={styles.checkRadioContainer}>
                <span>{label}</span>

                <label htmlFor='regular'>Regular:</label>
                <label htmlFor='temporario'>Temporário:</label>
                <label htmlFor='meio expediente'>Meio expediente:</label>
                <label htmlFor='estagiário'>Estagiário:</label>


                <input type="radio" id='regular' value={value} name='radio' onChange={(event) => setValue(event.target.id)} />
                <input type="radio" id='temporario' value={value} name='radio' onChange={(event) => setValue(event.target.id)} />
                <input type="radio" id='meio expediente' value={value} name='radio' onChange={(event) => setValue(event.target.id)} />
                <input type="radio" id='estagiário' value={value} name='radio' onChange={(event) => setValue(event.target.id)} />

            </div>
        </>
    )
}
