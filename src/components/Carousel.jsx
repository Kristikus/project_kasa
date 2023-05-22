import prevArrow from '../assets/prevArrow.svg'
import nextArrow from '../assets/nextArrow.svg'
import styles from '../styles/Housing.module.css'
import { useState } from 'react'

function Carousel({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextClick = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === images.length - 1 ? 0 : prevSlide + 1
        )
    }

    const prevClick = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
        )
    }

    return (
        <div className={styles.carouselContainer}>
            <img className={styles.img} src={images[currentSlide]} alt="pièce du logement" />
            {images.length > 1 && (
                <div>
                    <img
                        className={`${styles.arrow} ${styles.prevArrow}`}
                        src={prevArrow}
                        alt="précédent"
                        onClick={prevClick}
                    />
                    <img
                        className={`${styles.arrow} ${styles.nextArrow}`}
                        src={nextArrow}
                        alt="suivant"
                        onClick={nextClick}
                    />
                    <span className={styles.counter}>{`${currentSlide + 1} / ${
                        images.length
                    }`}</span>
                </div>
            )}
        </div>
    )
}

export default Carousel