import React from 'react';
import { Link } from 'react-router-dom';
import { ConomyWhiteLogo } from '../../assets/img';
import styles from './styles.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <figure>
                    <ConomyWhiteLogo/>
                </figure>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/creation">
                            Creation
                        </Link>
                    </li>
                    <li>
                        <Link to="/details">
                            Details
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}