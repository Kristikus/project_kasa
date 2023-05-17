import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/LOGO.svg'
import styles from '../styles/Header.module.css'

function Header() {
    return (
        <header className={styles.container}>
            <Link to='/'>
                <img className={styles.logo} src={logo} alt="logo Kasa" />
            </Link>
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? [`${styles.active} ${styles.link}`]
                            : styles.link
                    }
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/a-propos"
                    className={({ isActive }) =>
                        isActive
                            ? [`${styles.link} ${styles.active}`]
                            : styles.link
                    }
                >
                    A propos
                </NavLink>
            </nav>
        </header>
    )
}

export default Header
