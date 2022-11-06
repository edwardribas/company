import React from 'react';
import { Link } from 'react-router-dom';
import { HeroIllustration } from '../../assets/img';
import styles from './styles.module.scss';

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <h1>Conomy</h1>
            <p>Gerencie os projetos de sua organização de maneira simples e intuitiva!</p>
            <Link to="/creation">
                Começar projeto
            </Link>

            <figure>
                <HeroIllustration/>
            </figure>
        </section>
    )
}