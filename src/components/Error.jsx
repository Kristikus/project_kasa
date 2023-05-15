import styles from '../styles/Error.module.css'
import Home from '../pages/Home'
import { Link } from 'react-router-dom'
import style from '../styles/Error.module.css'

function Error() {
    return (
        <div className={styles.errorWrapper}>
            <h1 className={styles.errorTitle}>404</h1>
            <p className={styles.errorText}>
                Oups ! La page que vous demandez n'existe pas.
            </p>
            <Link className={style.errorLink} to="/" element={<Home />}>
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}

export default Error
