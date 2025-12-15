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

        <ul> {

            films.map((movie, index) => (

                <div key={index} className="container movie-card-grid">
                    <div className="row row-cols-1 row-cols-lg-2 g-4">


                        <div className="col">
                            <div className="movie-card">
                                <div className="movie-card-image">
                                    <img
                                        src={movie.image}
                                        alt=""
                                    />
                                </div>
                                <div className="movie-card-body">
                                    <h5>{movie.title}</h5>
                                    <p>{movie.abstract}</p>
                                    <a href="#!" className="btn-details">Details</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>


            ))


        }</ul>

    )
}