import Banner from '../components/Banner'
import Card from '../components/Card'
import logements from '../logements.json'
import imgHome from '../assets/img-home.png'
import styledBanner from '../styles/Banner.module.css'
import styledCard from '../styles/Card.module.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <Banner src={imgHome} alt={'Bannière'}>
                <h1 className={styledBanner.text}>
                    Chez vous, partout et ailleurs
                </h1>
            </Banner>
            <div className={styledCard.container}>
                {logements.map((logement) => (
                    <Link
                        to={`/logement/${logement.id}`}
                        className={styledCard.card}
                        key={logement.id}
                    >
                        <Card cover={logement.cover} title={logement.title} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Home
