import styles from '../styles/Banner.module.css'

function Banner({ children, src, image }) {
    return (
        <div className={`${styles.container}`}>
            <img className={`${styles.img} ${image}`} src={src} alt='Bannière'  />
            {children}
        </div>
    )
}

export default Banner