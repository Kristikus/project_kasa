import styles from '../styles/Banner.module.css'

function Banner({ children, src }) {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={src} alt='Bannière' />
            {children}
        </div>
    )
}

export default Banner