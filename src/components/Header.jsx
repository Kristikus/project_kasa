import { Link } from 'react-router-dom'
import logo from '../assets/LOGO.svg'
import styles from '../styles/Header.module.css'


function Header() {
    return (
        <div className={styles.container}>
            <img src={logo} alt="logo" />
            <nav>
                <Link className={styles.link} to="/">Accueil</Link>
                <Link className={styles.link} to="/about">A propos</Link>
            </nav>
        </div>

    )
}

export default Header