'use client'

import React, { useEffect, useState } from 'react'

import Image from 'next/image'

import { useRouter } from 'next/navigation'

import slugify from 'slugify'

import styles from '@/shared/styles/pages/home.module.scss'

import articles from '@/shared/data/articles'

import Wrapper from '@/shared/UI/layouts/wrapper'
import Container from '@/shared/UI/layouts/container'

slugify.extend({ ':': '' })

const Home = () => {
    const router = useRouter()

    const limit = 20

    const [page, setPage] = useState(1)
    const [slice, setSlice] = useState(articles.slice(0, limit))

    const buttons = Array(Math.ceil(articles.length / limit)).fill(null)

    console.log(articles.length, buttons)

    useEffect(() => {
        const start = (page - 1) * limit

        console.log('Base', start, start + limit)

        setSlice(articles.slice(start, start + limit))

        window.scrollTo({ top: 0 })
    }, [page])

    return (
        <Wrapper>
            <Container>
                <div className={styles.content}>
                    <h1 className={styles.heading}>Статьи{page > 1 ? `: ${page} cтраница` : ''}</h1>
                    <div className={styles.articles}>
                        {slice.map((article) => {
                            return (
                                <div className={styles.card}>
                                    <h2 className={`${styles.mobile} ${styles.title}`}>
                                        {article.name}
                                    </h2>
                                    <div className={styles.meta}>
                                        <Image
                                            className={styles.preview}
                                            src={article.preview.src}
                                            alt={article.preview.alt}
                                            width={150}
                                            height={150}
                                            loading='lazy'
                                        />
                                        <div className={styles.info}>
                                            <h2 className={`${styles.desktop} ${styles.title}`}>
                                                {article.name}
                                            </h2>
                                            <p className={styles.date}>{article.date}</p>
                                            <button
                                                className={styles.button}
                                                onClick={() =>
                                                    router.push(
                                                        `/articles/${slugify(article.name)}`
                                                    )
                                                }
                                            >
                                                Читать далее
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.pagination}>
                        {buttons.map((button, index) => {
                            return (
                                <button
                                    className={`${styles.page} ${
                                        index + 1 === page ? styles.active : ''
                                    }`}
                                    onClick={() => setPage(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </Wrapper>
    )
}

export default Home
