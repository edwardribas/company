import React from 'react';
import { NavLink } from 'react-router-dom';
import { ConomyWhiteLogotype } from '../../assets/img';
import styles from './styles.module.scss';

export const Header = () => {

    return (
        <header className={styles.header}>
            <nav>
                <NavLink to="/" end>
                    <figure>
                        <ConomyWhiteLogotype/>
                    </figure>
                </NavLink>
                <ul>
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? styles.active : undefined} end>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({isActive}) => isActive ? styles.active : undefined}>
                            Projetos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/creation" className={({isActive}) => isActive ? styles.active : undefined}>
                            Criar
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}