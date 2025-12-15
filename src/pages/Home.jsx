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
            <div className="container py-5">
                <div className="row row-cols-1 row-cols-lg-2 g-4">

                    {/* Card 1 */}
                    <div className="col">
                        <div className="card shadow-lg mb-4" style={{ borderRadius: '20px', overflow: 'hidden', display: 'flex', flexDirection: 'row', height: '300px' }}>

                            {/* Immagine */}
                            <div style={{ flex: '0 0 40%', height: '100%', background: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)' }}>
                                <img
                                    src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"
                                    alt="Movie One"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>

                            {/* Contenuto */}
                            <div className="card-body d-flex flex-column justify-content-center text-center px-3">
                                <h5 className="card-title">TITLE</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <a
                                    href="#!"
                                    className="btn mt-2"
                                    style={{
                                        padding: '12px 30px',
                                        borderRadius: '50px',
                                        background: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
                                        color: 'white',
                                        fontWeight: '600',
                                        textDecoration: 'none'
                                    }}
                                >
                                    Details
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}