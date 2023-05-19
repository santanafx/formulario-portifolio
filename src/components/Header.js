import React from 'react'
import styles from './Header.module.css'
import { GrLogin } from "react-icons/gr";
import { MdWork } from "react-icons/md";
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <header>
                <nav className={styles.headerMenu}>
                    <Link className={styles.linkMenuJob} to='/'><MdWork />Job.Forms</Link>
                    <div className={styles.linkMenuLoginSobre}>
                        <Link className={styles.linkMenuLogin} to='/login'><GrLogin />Login</Link>
                        <Link className={styles.linkMenuSobre} to='/sobre'>Sobre</Link>
                    </div>
                </nav>
            </header>
        </>
    )
}
