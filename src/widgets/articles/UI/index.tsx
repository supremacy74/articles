import React from 'react'

import styles from './styles.module.scss'

import articles from '@/shared/data/articles'

import Container from '@/shared/UI/layouts/container'

interface Props {
    id: number
}

const Articles = ({ id }: Props) => {
    const page = articles[id]

    return (
        <section className={styles.section}>
            <Container>
                <h1 className={styles.heading}>Статьи</h1>
                <div className={styles.articles}></div>
            </Container>
        </section>
    )
}

export default Articles
