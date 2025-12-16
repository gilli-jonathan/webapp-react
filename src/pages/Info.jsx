import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

export default function Info() {

    const { id } = useParams()
    const [details, seDetails] = useState({})

    function axiosCall() {
        axios.get(`http://localhost:3000/api/movies/${id}`)
            .then((rispo) => seDetails(rispo.data))
            .catch((err) => alert('dettagli del film in arrivo'))

    }

    useEffect(axiosCall, [])

    // FORM

    const [formData, setFormData] = useState({
        name: '',
        text: '',
        vote: '',
    })

    const CreateReview = (e) => {
        e.preventDefault();
        console.log('Dati inviati:', formData);
    }

    return (

        <>

            {/* locandina sulla sinistra */}
            <div className="row align-items-md-stretch">
                <div className="col-md-6">
                    <div className="h-100 p-5 border rounded-3">
                        <img src={details.image} alt="" />
                    </div>
                </div>


                {/* testo sulla destra */}
                <div className="col-md-6">
                    <div
                        className="h-100 p-5 border rounded-3 text-center"
                    >
                        <h1>{details.title}</h1>
                        <h5>{details.abstract}</h5>

                    </div>
                </div>
            </div>

            <hr />

            {/* FORM */}
            <form action="" onSubmit={CreateReview}>
                <label>
                    <h3>nome autore</h3>
                    <input name="author" type="text" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </label>

                <label>
                    <h3>your vote</h3>
                    <select name="vote" onChange={(e) => setFormData({ ...formData, vote: e.target.value })}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>

                <label>
                    <h3>your review</h3>
                    <textarea name="review" type="text" onChange={(e) => setFormData({ ...formData, text: e.target.value })} />
                </label>

                <button type="submit">Invia</button>
            </form>

        </>
    )
}