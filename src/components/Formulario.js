import React from 'react'
import styles from './Formulario.module.css'
import { Input } from './Input'
import { Select } from './Select'

export const Formulario = () => {

    const handleSelect = (event) => {

    }


    return (
        <div>
            <form >
                <Input label='Cargo:' placeholder='Digite seu cargo.' />
                <Input label='Responsável por:' placeholder='Digite sua função.' />
                <Input label='Departamento:' placeholder='Digite seu departamento.' />
                <Select label='Nome do supervisor:' handleSelect={handleSelect} />
            </form>
        </div>
    )
}
