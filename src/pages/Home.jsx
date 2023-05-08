import Banner from '../components/Banner'
import imgHome from '../assets/img-home.png'
import styles from '../styles/Banner.module.css'

function Home() {
    return (
        <>
            <h1>Page d'accueil</h1>
            <Banner src={imgHome} alt={'bdbdfb'}>
                <p className={styles.text}>Chez vous, partout et ailleurs</p>
            </Banner>
        </>
    )
}

export default Home
