import React from 'react'
import styles from './Input.module.css'

export const Input = ({ label, placeholder, setValue, value }) => {
    return (
        <>
            <div className={styles.inputContainer}>
                <label htmlFor='campo'>{label}</label>
                <input onChange={(event) => setValue(event.target.value)} value={value} className={styles.inputCampos} type="text" id='campo' placeholder={placeholder} />
            </div >
        </>
    )
}
