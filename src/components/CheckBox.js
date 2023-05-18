import React from 'react'

export const CheckBox = ({ label }) => {
    return (
        <>
            <span>{label}</span>
            <label htmlFor='regular'>Regular:
                <input type="radio" id='regular' />
            </label>
            <label htmlFor='temporario'>Temporário:
                <input type="radio" id='temporario' />
            </label>
            <label htmlFor='meio expediente'>Meio expediente:
                <input type="radio" id='meio expediente' />
            </label>
            <label htmlFor='estagiário'>Estagiário:
                <input type="radio" id='estagiário' />
            </label>
        </>
    )
}
