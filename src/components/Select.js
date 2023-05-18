import React from 'react'
import styles from './Select.module.css'
import { Context } from '../context/GlobalContext'

export const Select = ({ label }) => {

    const [global, dispatch] = React.useContext(Context);

    const handleSelect = (event) => {
        global.supervisor = event;
        console.log(global)
    }

    return (
        <>
            <div className={styles.selectContainer}>
                <label htmlFor='select'>{label}</label>
                <select className={styles.selectBox} id='select' onChange={(event) => handleSelect(event.target.value)}>
                    <option value=""></option>
                    <option value="Gustavo Rodriguez" >Gustavo Rodriguez</option>
                    <option value="Lucas Amorin" >Lucas Amorin</option>
                    <option value="João Tenório" >João Tenório</option>
                </select>
            </div>
        </>
    )
}
