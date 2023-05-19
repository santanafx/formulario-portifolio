import React from 'react'
import styles from './Formulario.module.css'
import { Input } from './Input'
import { Select } from './Select'
import { Date } from './Date'
import { CheckRadio } from './CheckRadio'
import { TextArea } from './TextArea'
import { CheckBox } from './CheckBox'

export const Formulario = () => {

    const [cargo, setCargo] = React.useState('');
    const [funcao, setFuncao] = React.useState('');
    const [departamento, setDepartamento] = React.useState('');
    const [responsabilidadeUm, setResponsabilidadeUm] = React.useState('');
    const [responsabilidadeDois, setResponsabilidadeDois] = React.useState('');
    const [responsabilidadeTres, setResponsabilidadeTres] = React.useState('');
    const [data, setData] = React.useState('');
    const [supervisor, setSupervisor] = React.useState('');
    const [statusEmprego, setStatusEmprego] = React.useState('');
    const [textArea, setTextArea] = React.useState('');
    const [checkBoxUm, setCheckBoxUm] = React.useState('');
    const [checkBoxDois, setCheckBoxDois] = React.useState('');
    const [checkBoxTres, setCheckBoxTres] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(cargo, funcao, departamento, responsabilidadeUm, responsabilidadeDois, responsabilidadeTres, data, supervisor, statusEmprego, textArea, checkBoxUm, checkBoxDois, checkBoxTres)

    }

    return (
        <div className={styles.formularioContainerBg}>
            <form onSubmit={(event) => handleSubmit(event)} className={styles.formularioContainer} >
                <h1>Formulário de descrição do trabalho</h1>
                <div style={{ display: 'flex' }}>
                    <div className={styles.formularioInput}>
                        <Input setValue={setCargo} value={cargo} label='Cargo: ' placeholder='Digite seu cargo.' />
                        <Input setValue={setFuncao} value={funcao} label='Função: ' placeholder='Digite sua função.' />
                        <Input setValue={setDepartamento} value={departamento} label='Departamento: ' placeholder='Digite seu departamento.' />
                        <Select setValue={setSupervisor} value={supervisor} label='Supervisor: ' />
                    </div>
                    <div className={styles.formularioCheck}>
                        <Date setValue={setData} value={data} label='Data: ' />
                        <CheckRadio setValue={setStatusEmprego} value={statusEmprego} label='Status emprego: ' />
                    </div>
                </div>
                <div>
                    <h4>A descrição do cargo é feita para descrever o trabalho que é organizado e executado por um funcionário totalmente qualificado (que possua conhecimentos, habilidades e experiência exigidas pela posição).</h4>
                </div>
                <TextArea setValue={setTextArea} value={textArea} />
                <h4>Liste em ordem de importância as principais responsabilidades do trabalho e marque a estimativa de tempo que gasta em cada responsabilidade.</h4>
                <div style={{ display: 'flex' }}>
                    <div className={styles.formularioInput}>
                        <Input setValue={setResponsabilidadeUm} value={responsabilidadeUm} label='1-' placeholder='Digite uma responsabilidade.' />
                        <Input setValue={setResponsabilidadeDois} value={responsabilidadeDois} label='2-' placeholder='Digite uma responsabilidade.' />
                        <Input setValue={setResponsabilidadeTres} value={responsabilidadeTres} label='3-' placeholder='Digite uma responsabilidade.' />
                    </div>
                    <div className={styles.formularioCheck}>
                        <CheckBox name='checkUm' setValue={setCheckBoxUm} value={checkBoxUm} />
                        <CheckBox name='checkDois' setValue={setCheckBoxDois} value={checkBoxDois} />
                        <CheckBox name='checkTres' setValue={setCheckBoxTres} value={checkBoxTres} />
                    </div>
                </div>
                <button className={styles.formularioBotao}>Enviar dados</button>
            </form>
        </div>
    )
}
