import React from 'react'

export const CheckBox = ({ label }) => {
    return (
        <>
            <span>{label}</span>
            <label htmlFor='regular'>Regular: </label>
            <input type="radio" id='regular' />
            <label htmlFor='temporario'>Temporário: </label>
            <input type="radio" id='temporario' />
            <label htmlFor='meio expediente'>Meio expediente: </label>
            <input type="radio" id='meio expediente' />
            <label htmlFor='estagiário'>Estagiário: </label>
            <input type="radio" id='estagiário' />
        </>
    )
}
