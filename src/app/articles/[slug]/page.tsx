'use client'

import React, { useEffect } from 'react'

import { JSX } from 'react/jsx-runtime'

import Image from 'next/image'

import slugify from 'slugify'

import styles from '@/shared/styles/pages/article.module.scss'

import articles from '@/shared/data/articles'

import Container from '@/shared/UI/layouts/container'
import Wrapper from '@/shared/UI/layouts/wrapper'

slugify.extend({ ':': '' })

const Article = ({ params }: { params: { slug: string } }) => {
    const { slug } = params

    console.log(slugify(articles[0].name))

    const article = articles.find((article) => slug === slugify(article.name))

    if (!article) {
        return
    }

    return (
        <Wrapper>
            <div className={styles.article}>
                <Container>
                    <h1 className={styles.heading}>{article.name}</h1>
                    <div className={styles.content}>
                        <Image
                            className={styles.preview}
                            src={article.preview.src}
                            alt='Preview'
                            width={500}
                            height={616}
                            loading='lazy'
                        />
                        {article.content.map((item, index) => {
                            const { value, tag } = item

                            const Tag = tag as keyof JSX.IntrinsicElements

                            if (typeof value === 'string') {
                                return <Tag key={index}>{value}</Tag>
                            }

                            if (Array.isArray(value)) {
                                return (
                                    <ul>
                                        {value.map((item) => {
                                            return <li>{item}</li>
                                        })}
                                    </ul>
                                )
                            }

                            if (typeof value === 'object' && 'src' in value && 'alt' in value) {
                                return (
                                    <Image
                                        key={index}
                                        className={styles.image}
                                        src={value.src}
                                        alt={value.alt}
                                        width={500}
                                        height={616}
                                        loading='lazy'
                                    />
                                )
                            }
                        })}
                    </div>
                </Container>
            </div>
        </Wrapper>
    )
}

export default Article
