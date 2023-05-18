import React from 'react'
import styles from './TextArea.module.css'

export const TextArea = () => {
    return (
        <>
            <h4>Qual é a total finalidade e objetivo desse cargo (por que o cargo existe)?</h4>
            <textarea cols="100" rows="10" placeholder='Descreva a finalidade do cargo.'></textarea>
        </>
    )
}
