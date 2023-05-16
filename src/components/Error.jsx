import styles from '../styles/Error.module.css'
import Home from '../pages/Home'
import { Link } from 'react-router-dom'
import style from '../styles/Error.module.css'

function Error() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.text}>
                Oups ! La page que vous demandez n'existe pas.
            </p>
            <Link className={style.link} to="/" element={<Home />}>
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}

export default Error