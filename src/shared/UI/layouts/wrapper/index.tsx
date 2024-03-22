import React, { ReactNode } from 'react'

import styles from './styles.module.scss'

import Header from '@/widgets/header/UI'
import Breadcrumbs from '@/widgets/breadcrumbs/UI'

interface Props {
    children: ReactNode
}

const Wrapper = ({ children }: Props) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Breadcrumbs />
            {children}
        </div>
    )
}

export default Wrapper
