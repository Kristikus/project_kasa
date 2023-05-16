import { Link } from 'react-router-dom'
import logo from '../assets/LOGO.svg'
import styles from '../styles/Header.module.css'

function Header() {
    return (
        <header className={styles.container}>
            <img className={logo} src={logo} alt="logo Kasa" />
            <nav>
                <Link className={styles.link} to="/">
                    Accueil
                </Link>
                <Link className={styles.link} to="/a-propos">
                    A propos
                </Link>
            </nav>
        </header>
    )
}

export default Header