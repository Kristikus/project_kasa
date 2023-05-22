import styles from '../styles/Housing.module.css'

function Rating({ starRating }) {
    const rating = [1, 2, 3, 4, 5]

    return (
        <div className={styles.starContainer}>
            {rating.map((rate) => (
                <i
                    key={rate.toString()}
                    className={`fa-solid fa-star ${
                        rate <= starRating ? styles.star : styles.starEmpty
                    }`}
                ></i>
            ))}
        </div>
    )
}

export default Rating
