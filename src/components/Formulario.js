import React from 'react'
import styles from './Formulario.module.css'
import { Input } from './Input'
import { Select } from './Select'
import { Date } from './Date'
import { CheckRadio } from './CheckRadio'
import { TextArea } from './TextArea'
import { CheckBox } from './CheckBox'

export const Formulario = () => {

    const [supervisor, setSupervisor] = React.useState('');

    const handleSelect = (element) => {
        setSupervisor(element);
        window.localStorage.setItem('supervisor', element);
    }

    return (
        <div className={styles.formularioContainerBg}>
            <form className={styles.formularioContainer} >
                <h1>Formulário de descrição do trabalho</h1>
                <div style={{ display: 'flex' }}>
                    <div className={styles.formularioInput}>
                        <Input label='Cargo: ' placeholder='Digite seu cargo.' />
                        <Input label='Responsável: ' placeholder='Digite sua função.' />
                        <Input label='Departamento: ' placeholder='Digite seu departamento.' />
                        <Select label='Supervisor: ' handleSelect={handleSelect} />
                    </div>
                    <div className={styles.formularioCheck}>
                        <Date label='Data: ' />
                        <CheckRadio label='Status emprego: ' />
                    </div>
                </div>
                <div>
                    <h4>A descrição do cargo é feita para descrever o trabalho que é organizado e executado por um funcionário totalmente qualificado (que possua conhecimentos, habilidades e experiência exigidas pela posição).</h4>
                </div>
                <TextArea />
                <h4>Liste em ordem de importância as principais responsabilidades do trabalho e marque a estimativa de tempo que gasta em cada responsabilidade.</h4>
                <div style={{ display: 'flex' }}>
                    <div className={styles.formularioInput}>
                        <Input label='1-' placeholder='Digite uma responsabilidade.' />
                        <Input label='2-' placeholder='Digite uma responsabilidade.' />
                        <Input label='3-' placeholder='Digite uma responsabilidade.' />
                    </div>
                    <div className={styles.formularioCheck}>
                        <CheckBox />
                        <CheckBox />
                        <CheckBox />
                    </div>
                </div>
            </form>
        </div>
    )
}
