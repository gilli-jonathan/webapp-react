import { useEffect, useState } from "react"
import axios from "axios"


export default function Home() {

    const movies = "http://localhost:3000/api/movies"

    const [films, setFilms] = useState([])

    useEffect(() => axiosCall(), [])

    function axiosCall() {
        axios.get(movies)
            .then((rispo) => {
                setFilms(rispo.data)
            })
    }



    return (
        <>
            <div className="container movie-card-grid">
                <div className="row row-cols-1 row-cols-lg-2 g-4">

                    {/* Card 1 */}
                    <div className="col">
                        <div className="movie-card">
                            <div className="movie-card-image">
                                <img
                                    src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"
                                    alt="Movie One"
                                />
                            </div>
                            <div className="movie-card-body">
                                <h5>Movie One</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <a href="#!" className="btn-details">Details</a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}