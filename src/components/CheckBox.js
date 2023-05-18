import React from 'react'
import styles from './CheckBox.module.css'

export const CheckBox = ({ value, setValue, name }) => {

    const handleCheckBox = (event) => {
        var checkBox = document.getElementsByName(name);
        checkBox.forEach(element => {
            if (element !== event.target) element.checked = false
        })
        setValue(event.target.id);
    }

    return (
        <>
            <div className={styles.containerCheckBox}>
                <label htmlFor='1h'>1h: </label>
                <input id='1h' type="checkbox" name={name} value={value} onChange={(event) => handleCheckBox(event)} />
                <label htmlFor='2h3h'> | 2h ou 3h: </label>
                <input id='2h3h' type="checkbox" name={name} value={value} onChange={(event) => handleCheckBox(event)} />
                <label htmlFor='mais3h'> | Mais de 3h: </label>
                <input id='mais3h' type="checkbox" name={name} value={value} onChange={(event) => handleCheckBox(event)} />
            </div>
        </>
    )
}
