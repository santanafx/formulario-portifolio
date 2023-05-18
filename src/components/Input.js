import React from 'react'
import styles from './Input.module.css'

export const Input = ({ label, placeholder }) => {
    return (
        <>
            <div className={styles.inputContainer}>
                <label htmlFor='campo'>{label}</label>
                <input type="text" id='campo' placeholder={placeholder} />
            </div >
        </>
    )
}
