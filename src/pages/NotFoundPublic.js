import React from 'react'
import styles from './NotFoundPublic.module.css'
import { useNavigate } from 'react-router-dom'

export const NotFoundPublic = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.notFoundPublicContainerBg}>
                <div className={styles.notFoundPublicContainer}>
                    <h4>Página não encontrada ou usuário saiu da página do formulário. Por favor, realizar o login novamente.</h4>
                    <button className={styles.notFoundPublicBotao} onClick={() => navigate('/')}>Continuar</button>
                </div>
            </div >
        </>
    )
}
