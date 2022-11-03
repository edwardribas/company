import React from 'react';
import { NavLink } from 'react-router-dom';
import { ConomyWhiteLogo } from '../../assets/img';
import styles from './styles.module.scss';

export const Header = () => {

    return (
        <header className={styles.header}>
            <nav>
                <NavLink
                    to="/"
                >
                    <figure>
                        <ConomyWhiteLogo/>
                    </figure>
                </NavLink>
                <ul>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/creation">
                            Creation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/details">
                            Details
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}