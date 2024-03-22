import React from 'react'

import styles from './styles.module.scss'

import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
    return (
        <Link href='/'>
            <Image
                className={styles.logo}
                src='/images/logo.png'
                alt='logo'
                width={181}
                height={71}
            />
        </Link>
    )
}

export default Logo
