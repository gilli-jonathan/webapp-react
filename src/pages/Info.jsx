import axios from "axios"
import { useState, useEffect } from "react"
//import { useParams, Link } from "react-router-dom"

export default function Info() {

    //const { id } = useParams()
    const [details, seDetails] = useState({})

    function axiosCall() {
        axios.get('http://localhost:3000/api/movies/1')
            .then((rispo) => seDetails(rispo.data))
            .catch((err) => alert('michè non ti vuole davvero bene'))

    }

    useEffect(axiosCall, [])


    return (

        <>
            <h2>DETTAGLI DEL PRODOTTO</h2>
            <p>{details.title}</p>

        </>
    )
}