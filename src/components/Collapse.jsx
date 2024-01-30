import { useState } from 'react'
import styles from '../styles/Collapse.module.css'
import arrowOpen from '../assets/arrow-open.png'
import arrowClose from '../assets/arrow-close.png'

function Collapse({ title, description }) {
    const [toggle, setToggle] = useState(false)
    const collapse = title === 'Description' || 'Equipements'

    return (
        <>
            <div className={collapse ? styles.containerLogement : styles.container}>
                <div
                    className={styles.titleContainer}
                    onClick={() => setToggle(!toggle)}
                >
                    <p className={styles.title}>{title}</p>
                    {toggle ? (
                        <img className={styles.img} src={arrowClose} alt="Fermer" />
                    ) : (
                        <img className={styles.img} src={arrowOpen} alt="Ouvrir" />
                    )}
                </div>

                {toggle && (
                    <div className={
                            collapse ? styles.description : [`${styles.description} ${styles.descriptionAbout}`]
                        }
                    >
                        {description}
                    </div>
                )}
            </div>
        </>
    )
}

export default Collapse