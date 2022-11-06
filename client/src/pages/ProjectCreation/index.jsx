import React, { useState } from 'react';
import styles from './styles.module.scss';

export const ProjectCreation = () => {
    const validCategories = [
        "Infra", "Desenvolvimento", "Design", "Planejamento"
    ]
    const [projectName, setProjectName] = useState('');
    const [projectBudget, setProjectBudget] = useState(0);
    const [projectCategory, setProjectCategory] = useState('');


    return (
        <section className={styles.newproject}>
            <h1>Criar novo projeto</h1>
            <p>
                Está pronto para começar a gerenciar um novo projeto?
                Preencha os campos abaixo para dar início.
            </p>

            <div className={styles.form}>
                <fieldset>
                    <label htmlFor="i1">Nome</label>
                    <input
                        type="text"
                        id="i1"
                        placeholder='Digite o nome do projeto'
                        autoFocus
                        autoComplete='off'
                        spellCheck="false"
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="i2">Orçamento</label>
                    <input
                        type="number"
                        id="i2"
                        placeholder='Digite o orçamento do projeto'
                        autoComplete='off'
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="i3">Categoria</label>
                    <select id="i3" defaultValue={1}>
                        {validCategories.map((cat, index) => (
                            <option
                                key={index}
                                value={index+1}
                            >
                                {cat}
                            </option>
                        ))}
                    </select>
                </fieldset>
                <button>
                    Criar
                </button>
            </div>
        </section>
    )
}