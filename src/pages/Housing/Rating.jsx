import styles from '../../styles/Housing.module.css'

function Rating({ starRating }) {
    const rating = [1, 2, 3, 4, 5]
    const star = <i className={`${styles.star} fa-solid fa-star`}></i>
    const starGrey = <i className={`${styles.starEmpty} fa-solid fa-star`}></i>

    return (
        <div>
            {rating.map((rate) =>
                starRating >= rate ? (
                    <span key={rate.toString()}>{star}</span>
                ) : (
                    <span key={rate.toString()}>{starGrey}</span>
                )
            )}
        </div>
    )
}

export default Rating