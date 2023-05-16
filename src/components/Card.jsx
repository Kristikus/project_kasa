import styles from '../styles/Card.module.css'

function Card({ cover, title, alt }) {
    return (
        <>
            <div className={styles.gradient}></div>
            <img className={styles.img} src={cover} alt={alt} />
            <h2 className={styles.title}>{title}</h2>
        </>
    )
}

export default Card