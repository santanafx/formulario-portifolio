import React from 'react'
import styles from './NotFoundPrivate.module.css'
import { Context } from '../context/GlobalContext'

export const NotFoundPrivate = () => {

    const { setAutenticar } = React.useContext(Context);


    return (
        <div className={styles.notFoundPrivateContainerBg}>
            <div className={styles.notFoundPrivateContainer}>
                <h4>Página não encontrada ou usuário saiu da página do formulário. Por favor, realizar o login novamente.</h4>
                <button className={styles.notFoundPrivateBotao} onClick={() => setAutenticar(false)}>Continuar</button>
            </div>
        </div >
    )
}
