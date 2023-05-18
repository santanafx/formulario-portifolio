import React from 'react'
import styles from './TextArea.module.css'

export const TextArea = ({ value, setValue }) => {
    return (
        <>
            <h4>Qual é a total finalidade e objetivo desse cargo (por que o cargo existe)?</h4>
            <textarea value={value} onChange={(event) => setValue(event.target.value)} cols="100" rows="10" placeholder='Descreva a finalidade do cargo.'></textarea>
        </>
    )
}
