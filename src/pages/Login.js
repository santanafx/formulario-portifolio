import React from 'react'
import styles from './Login.module.css'
import { Context } from '../context/GlobalContext';

export const Login = () => {

    const [usuario, setUsuario] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const { setAutenticar, dataBase } = React.useContext(Context);

    const validarUsuario = (usuario) => {
        return usuario?.toString().includes('@') && usuario?.toString().includes('.')

    }

    const validarSenha = (senha) => {
        return senha?.toString().length > 6;
    }

    const handleForm = (event) => {
        event.preventDefault();
        dataBase.map(element => {
            if (usuario === element.usuario && senha === element.senha) {

                setAutenticar(true);
            }
        }
        )

        // console.log(validarUsuario(usuario), validarSenha(senha))
    }

    return (
        <div className={styles.loginContainerBg}>
            <form onSubmit={(event) => handleForm(event)} className={styles.loginContainer}>
                <h1>Faça seu login: </h1>
                <label htmlFor='usuario'>Usuário</label>
                <input className={styles.loginInput} type="email" id='usuario' placeholder='Digite seu email.' value={usuario} onChange={event => setUsuario(event.target.value)} />

                <label htmlFor='senha'>Senha</label>
                <input className={styles.loginInput} type="password" id='senha' placeholder='Digite sua senha.' value={senha} onChange={event => setSenha(event.target.value)} />

                <button className={styles.loginBotao}>Entrar</button>
            </form>
        </div>
    )
} 