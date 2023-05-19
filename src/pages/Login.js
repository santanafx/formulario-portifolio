import React from 'react'
import styles from './Login.module.css'
import { Context } from '../context/GlobalContext';

export const Login = () => {

    const [usuario, setUsuario] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const { setAutenticar, dataBase } = React.useContext(Context);
    const [usuarioEncontrado, setUsuarioEncontrado] = React.useState(true);
    const [cadastrar, setCadastrar] = React.useState(false);
    const [senhaRepetida, setSenhaRepetida] = React.useState('');

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
                setUsuarioEncontrado(true);
                setAutenticar(true);
            } else {
                setUsuarioEncontrado(false);
            }
        }
        )
    }

    const handleClick = () => {
        setUsuarioEncontrado(true);
        setCadastrar(true);
        if (senhaRepetida !== '') {
            console.log('senha confirmada')
        }
    }

    return (
        <div className={styles.loginContainerBg}>
            <form className={styles.loginContainer}>
                <h1>Faça seu login: </h1>
                <label htmlFor='usuario'>Usuário</label>
                <input className={styles.loginInput} type="email" id='usuario' placeholder='Digite seu email.' value={usuario} onChange={event => setUsuario(event.target.value)} />

                <label htmlFor='senha'>Senha</label>
                <input className={styles.loginInput} type="password" id='senha' placeholder='Digite sua senha.' value={senha} onChange={event => setSenha(event.target.value)} />

                {usuarioEncontrado ? '' : <span style={{ color: 'red' }}>Usuário ou senha errada.</span>}

                {cadastrar ?
                    <div className={styles.senhaRepetirContainer}>
                        <label htmlFor='repetirSenha'>Repita sua senha novamente e clique em casdastrar</label>
                        <input className={styles.loginInput} type="password" id='repetirSenha' placeholder='Digite sua senha novamente.' value={senhaRepetida} onChange={(event) => setSenhaRepetida(event.target.value)} />
                    </div> : ''}

                <div className={styles.loginBotaoContainer}>
                    <button type='submit' className={styles.loginBotao} onClick={(event) => handleForm(event)}>Entrar</button>
                    <button type='button' className={styles.loginBotao} onClick={() => handleClick()}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
} 