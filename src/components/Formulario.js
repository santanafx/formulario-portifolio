import React from 'react'
import styles from './Formulario.module.css'
import { Input } from './Input'
import { Select } from './Select'
import { Date } from './Date'

export const Formulario = () => {

    const [supervisor, setSupervisor] = React.useState('');

    const handleSelect = (element) => {
        setSupervisor(element);
        window.localStorage.setItem('supervisor', element);
    }


    return (
        <div>
            <form >
                <Input label='Cargo:' placeholder='Digite seu cargo.' />
                <Input label='Responsável por:' placeholder='Digite sua função.' />
                <Input label='Departamento:' placeholder='Digite seu departamento.' />
                <Select label='Nome do supervisor:' handleSelect={handleSelect} />
                <Date label='Data:' />

            </form>
        </div>
    )
}
