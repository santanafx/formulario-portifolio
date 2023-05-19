import React from 'react'
import styles from './Login.module.css'

export const Login = () => {
    return (
        <div className={styles.loginContainerBg}>
            <form className={styles.loginContainer}>
                <label htmlFor='usuario'>Usuário</label>
                <input className={styles.loginInput} type="text" id='usuario' />

                <label htmlFor='senha'>Senha</label>
                <input className={styles.loginInput} type="password" id='senha' />

                <button className={styles.loginBotao}>Entrar</button>
            </form>
        </div>
    )
}
