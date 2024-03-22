'use client'

import React from 'react'

import { usePathname } from 'next/navigation'

import Link from 'next/link'

import slugify from 'slugify'

import styles from './styles.module.scss'

import articles from '@/shared/data/articles'

import Icons from '@/shared/UI/icons'

import Container from '@/shared/UI/layouts/container'

slugify.extend({ ':': '' })

const Breadcrumbs = () => {
    const pathname = usePathname()

    console.log(pathname)

    if (!pathname) {
        return null
    }

    const article = articles.find((article) => {
        const array = pathname.split('/')

        return slugify(article.name) === array[array.length - 1]
    })

    const breadcrumbs = [
        {
            value: 'Статьи',
            href: '/'
        }
    ]

    if (article) {
        breadcrumbs.push({
            value: article.name,
            href: `/articles/${slugify(article.name)}`
        })
    }

    return (
        <div className={styles.breadcrumbs}>
            <Container>
                {breadcrumbs.map((item, index) => {
                    const isLast = index === breadcrumbs.length - 1

                    return (
                        <>
                            {isLast ? (
                                <span>{item.value}</span>
                            ) : (
                                <Link className={styles.accent} href={item.href}>
                                    {item.value}
                                </Link>
                            )}
                            {!isLast && <Icons.Next />}
                        </>
                    )
                })}
            </Container>
        </div>
    )
}

export default Breadcrumbs
