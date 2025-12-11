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
            <ul>
                {
                    films.map((ele, ind) => (
                        <li key={ind}>
                            <h3>{ele.title}</h3>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}