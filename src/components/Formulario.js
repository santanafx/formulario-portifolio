import React from 'react'
import styles from './Formulario.module.css'
import { Input } from './Input'

export const Formulario = () => {
    return (
        <div>
            <form >
                <Input label='Cargo:' placeholder='Digite seu cargo.' />
                <Input label='Responsável por:' placeholder='Digite sua função.' />
                <Input label='Departamento:' placeholder='Digite seu departamentogi.' />
            </form>
        </div>
    )
}
