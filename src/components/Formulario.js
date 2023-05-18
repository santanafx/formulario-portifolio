import React from 'react'
import styles from './Formulario.module.css'
import { Input } from './Input'
import { Select } from './Select'
import { Date } from './Date'
import { CheckBox } from './CheckBox'
import { TextArea } from './TextArea'

export const Formulario = () => {

    const [supervisor, setSupervisor] = React.useState('');

    const handleSelect = (element) => {
        setSupervisor(element);
        window.localStorage.setItem('supervisor', element);
    }

    return (
        <div className={styles.formularioContainerBg}>
            <form className={styles.formularioContainer} >
                <h1 className={styles.formularioText}>Formulário de descrição do trabalho</h1>
                <div style={{ display: 'flex' }}>
                    <div className={styles.formularioInput}>
                        <Input label='Cargo: ' placeholder='Digite seu cargo.' />
                        <Input label='Responsável: ' placeholder='Digite sua função.' />
                        <Input label='Departamento: ' placeholder='Digite seu departamento.' />
                        <Select label='Supervisor: ' handleSelect={handleSelect} />
                    </div>
                    <div className={styles.formularioCheck}>
                        <Date label='Data: ' />
                        <CheckBox label='Status emprego: ' />
                    </div>
                </div>
                <div>
                    <h4 className={styles.formularioText}>A descrição do cargo é feita para descrever o trabalho que é organizado e executado por um funcionário totalmente qualificado (que possua conhecimentos, habilidades e experiência exigidas pela posição).</h4>
                </div>
                <TextArea />
            </form>
        </div>
    )
}
