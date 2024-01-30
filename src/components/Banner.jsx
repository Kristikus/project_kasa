import styles from '../styles/Banner.module.css'

function Banner({ children, src, imageHome }) {
    return (
        <div className={`${styles.container}`}>
            <img className={`${styles.img} ${imageHome}`} src={src} alt='Bannière'  />
            {children}
        </div>
    )
}

export default Banner