import styles from '../styles/Banner.module.css'

function Banner({ children, src, alt }) {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={src} alt={alt} />
            {children}
        </div>
    )
}

export default Banner
