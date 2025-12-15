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

            {/* locandina sulla sinistra */}
            <div className="row align-items-md-stretch">
                <div className="col-md-6">
                    <div className="h-100 p-5 border rounded-3">
                        <img src="" alt="" />
                    </div>
                </div>


                {/* testo sulla destra */}
                <div className="col-md-6">
                    <div
                        className="h-100 p-5 border rounded-3 text-center"
                    >
                        <h1>{details.title}</h1>
                        <h5><italic>{details.abstract}</italic></h5>

                    </div>
                </div>
            </div>

            {/* <h2>DETTAGLI DEL PRODOTTO</h2>
            <p>{details.title}</p> */}

        </>
    )
}