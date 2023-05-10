import styles from '../styles/Card.module.css'
import { Link } from 'react-router-dom'

function Card({ cover, title }) {
    return (
        <Link to="/housing" className={styles.card}>
            <div className={styles.gradient}></div>
            <img className={styles.img} src={cover} alt="logement" />
            <h2 className={styles.title}>{title}</h2>
        </Link>
    )
}

export default Card
