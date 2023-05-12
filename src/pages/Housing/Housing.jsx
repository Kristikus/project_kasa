import { useParams } from 'react-router-dom'
import logements from '../../logements.json'
import Carousel from './Carousel'
import Rating from './Rating'

function Housing() {
    const { id } = useParams()

    return (
        <>
            {logements
                .filter((housing) => housing.id === id)
                .map((filterHousing) => (
                    <div key={filterHousing.id}>
                        <Carousel
                            // src={filterHousing.pictures[currentSlide]}
                            // onClickPrev={prevClick}
                            // onClickNext={nextClick}

                            key={filterHousing.id}
                            images={filterHousing.pictures}
                        ></Carousel>
                        <div>
                            <div>
                                <h1>{filterHousing.title}</h1>
                                <p>{filterHousing.location}</p>
                                {filterHousing.tags.map((tag, index) => (
                                    <span key={`${filterHousing.tag}-${index}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div>
                                <p>{filterHousing.host.name}</p>
                                <img
                                    src={filterHousing.host.picture}
                                    alt={filterHousing.host.name}
                                />
                                <Rating
                                    starRating={filterHousing.rating}
                                ></Rating>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    )
}
export default Housing
