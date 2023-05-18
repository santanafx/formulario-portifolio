import React from 'react'

export const Input = ({ label, placeholder }) => {
    return (
        <>
            <label htmlFor='campo'>{label}</label>
            <input type="text" id='campo' placeholder={placeholder} />
        </>
    )
}
