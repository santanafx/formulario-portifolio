import React from 'react'
import styles from './Select.module.css'

export const Select = ({ label, setValue, value }) => {

    return (
        <>
            <div className={styles.selectContainer}>
                <label htmlFor='select'>{label}</label>
                <select className={styles.selectBox} id='select' onChange={(event) => setValue(event.target.value)}>
                    <option value={value}></option>
                    <option value="Gustavo Rodriguez" >Gustavo Rodriguez</option>
                    <option value="Lucas Amorin" >Lucas Amorin</option>
                    <option value="João Tenório" >João Tenório</option>
                </select>
            </div>
        </>
    )
}
