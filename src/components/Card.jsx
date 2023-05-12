import styles from '../styles/Card.module.css'

function Card({ cover, title }) {
    return (
        <>
            <div className={styles.gradient}></div>
            <img className={styles.img} src={cover} alt="logement" />
            <h2 className={styles.title}>{title}</h2>
        </>
    )
}

export default Card
