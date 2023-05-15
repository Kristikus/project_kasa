import { useState } from 'react'
import styles from '../styles/Collapse.module.css'
import arrowUp from '../assets/arrow-up.png'
import arrowDown from '../assets/arrow-down.png'

function Collapse({ title, description }) {
    const [open, setOpen] = useState(false)
    const collapse = title === 'Description' || title === 'Equipements'

    return (
        <>
            <div
                className={
                    collapse ? styles.containerLogement : styles.container
                }
            >
                <div
                    className={styles.titleContain}
                    onClick={() => setOpen(!open)}
                >
                    <h2 className={styles.title}>{title}</h2>
                    {open ? (
                        <img className={styles.img} src={arrowUp} alt="" />
                    ) : (
                        <img className={styles.img} src={arrowDown} alt="" />
                    )}
                </div>
                {open && (
                    <div className={styles.description}>{description}</div>
                )}
            </div>
        </>
    )
}

export default Collapse
