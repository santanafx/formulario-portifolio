import React from 'react'

export const Date = ({ label }) => {
    return (
        <>
            <label htmlFor='date'>{label}
                <input type="date" id='date' />
            </label>
        </>
    )
}
