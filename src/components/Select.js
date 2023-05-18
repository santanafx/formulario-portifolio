import React from 'react'

export const Select = ({ label, handleSelect }) => {

    return (
        <>
            <label htmlFor='select'>{label}
                <select id='select' onChange={(event) => handleSelect(event.target.value)}>
                    <option value=""></option>
                    <option value="Gustavo Rodriguez" >Gustavo Rodriguez</option>
                    <option value="Lucas Amorin" >Lucas Amorin</option>
                    <option value="João Tenório" >João Tenório</option>
                </select>
            </label>
        </>
    )
}
