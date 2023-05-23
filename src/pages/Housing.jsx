import { useNavigate, useParams } from 'react-router-dom'
import logements from '../logements.json'
import Carousel from '../components/Carousel'
import Rating from '../components/Rating'
import styles from '../styles/Housing.module.css'
import Collapse from '../components/Collapse'
import { useEffect } from 'react'

function Housing() {
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const allowedID = logements
            .filter((logement) => logement.id === id)
            .map((logement) => logement.id)
            .join(',')

        if (id !== allowedID) {
            navigate('/erreur')
        }
    })

    return (
        <>
            {logements
                .filter((logement) => logement.id === id)
                .map((logement) => (
                    <main key={logement.id} className={styles.divContainer}>
                        <Carousel
                            images={logement.pictures}
                        ></Carousel>
                        <div className={styles.wrapper}>
                            <div>
                                <h1 className={styles.title}>
                                    {logement.title}
                                </h1>
                                <p className={styles.location}>
                                    {logement.location}
                                </p>
                                <div>
                                    {logement.tags.map((tag, index) => (
                                        <span
                                            key={`${logement.tag}-${index}`}
                                            className={styles.tags}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.hostWrapper}>
                                <div className={styles.hostContainer}>
                                    <p className={styles.hostName}>
                                        {logement.host.name}
                                    </p>
                                    <img
                                        src={logement.host.picture}
                                        alt={logement.host.name}
                                        className={styles.hostImg}
                                    />
                                </div>
                                <Rating starRating={logement.rating}></Rating>
                            </div>
                        </div>
                        <div className={styles.collapseWrapper}>
                            <Collapse
                                title="Description"
                                description={logement.description}
                            ></Collapse>
                            <Collapse
                                title="Equipements"
                                description={logement.equipments.map(
                                    (equipment, index) => (
                                        <li
                                            key={`${equipment} ${index}`}
                                            className={styles.equipmentsList}
                                        >
                                            {equipment}
                                        </li>
                                    )
                                )}
                            ></Collapse>
                        </div>
                    </main>
                ))}
        </>
    )
}

export default Housing
