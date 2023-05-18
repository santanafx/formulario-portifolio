import React from 'react'
import styles from './CheckBox.module.css'

export const CheckBox = () => {
    return (
        <>
            <div className={styles.containerCheckBox}>
                <label htmlFor='1h'>1h: </label>
                <input id='1h' type="checkbox" name='1h' />
                <label htmlFor='2h3h'> | 2h ou 3h: </label>
                <input id='2h3h' type="checkbox" name='2h3h' />
                <label htmlFor='mais3h'> | Mais de 3h: </label>
                <input id='mais3h' type="checkbox" name='mais3h' />
            </div>
        </>
    )
}
