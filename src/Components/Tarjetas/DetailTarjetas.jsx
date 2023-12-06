import React, { useEffect, useState } from 'react'
import './detail.css';
import { useParams } from 'react-router';
import axios from 'axios';


const DetailTarjetas = () => {

    const [detalle, setDetalle] = useState([]);
    const { id } = useParams();
    const ts = 5;
    const key = "8f40f8fda998059f791b0df1a18f02d1";
    const hash = "16cf116468274d95c21fe89b06107310";
    const categoria = "comics";
    const url = `https://gateway.marvel.com/v1/public/${categoria}/${id}?ts=${ts}&apikey=${key}&hash=${hash}`;


    useEffect(() => {
        const solicitud = async () => {
            try {
                const respuesta = await axios.get(url);
                setDetalle(respuesta.data.data.results[0])
                // console.log(respuesta.data.data.results[0]);

            } catch (error) {
                console.error("hubo un error:", error);
            }

        }

        solicitud();

    }, [])


    if (!detalle || !detalle.thumbnail) {
        return (

            <div className='text-center- loading'>
                <div
                    className="spinner-grow text-light"
                    role="status">
                    <span class="visually-hidden">Cargando...</span>
                </div>

                <div
                    class="spinner-grow text-light"
                    role="status"
                >
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        )
    }
    return (
        <main className='content-detail'>
            <div className='content-img'>
                <img src={`${detalle.thumbnail.path}/portrait_uncanny.${detalle.thumbnail.extension}`}
                    alt=""
                    className='img-card'
                />
            </div>

            <div className='Content-titulo'>
                <h2>{detalle.title}</h2>
                <h3>Fecha de Publicación:</h3>
                <p>
                    {detalle.dates[0].date}
                </p>

            </div>
        </main>
    )
}

export default DetailTarjetas
