import styles from '../styles/Banner.module.css'

function Banner({ children, src, containHome, imgHome }) {
    return (
        <div className={`${styles.container} ${containHome}`}>
            <img className={`${styles.img} ${imgHome}`} src={src} alt='Bannière'  />
            {children}
        </div>
    )
}

export default Banner