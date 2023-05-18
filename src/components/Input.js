import React from 'react'
import styles from './Input.module.css'

export const Input = ({ label, placeholder, inputCargo, setInputCargo }) => {
    return (
        <>
            <div className={styles.inputContainer}>
                <label htmlFor='campo'>{label}</label>
                <input onChange={(event) => setInputCargo(event.target.value)} value={inputCargo} className={styles.inputCampos} type="text" id='campo' placeholder={placeholder} />
            </div >
        </>
    )
}
