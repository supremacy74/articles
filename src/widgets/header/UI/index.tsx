import styles from './styles.module.scss'

import Container from '@/shared/UI/layouts/container'
import Logo from '@/shared/UI/logo'

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <Logo />
            </Container>
        </header>
    )
}

export default Header
