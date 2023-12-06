import React, { useEffect, useState } from 'react'
import Tarjetas from '../Tarjetas/Tarjetas'
import "./contenedortarjetas.css"
import axios from 'axios';

const ContenedorTarjetas = () => {
  const [datos, setDatos] = useState([]);
  const ts = 5;
  const key = "8f40f8fda998059f791b0df1a18f02d1";
  const hash = "16cf116468274d95c21fe89b06107310";
  const categoria = "comics";
  const url = `https://gateway.marvel.com/v1/public/${categoria}?ts=${ts}&apikey=${key}&hash=${hash}`;

  useEffect(() => {
    const solicitud = async () => {
      try {
        const respuesta = await axios.get(url)
        // console.log(respuesta.data.data.results);
        setDatos(respuesta.data.data.results);
      } catch (error) {
        console.error("hubo un error:", error);
      }

    }

    solicitud();

  }, [url])


  return (
    <>
      <main className='contenedortarjetas'>
       
        {datos.length === 0 ? (
          <div className='text-center-loading'>
          <div
            className="spinner-grow text-light"
            role="status"
          >
            <span className="visually-hidden">Cargando...</span>
          </div>
          </div>
        ) : (
          
          datos.map((item) => (
            <Tarjetas
              key={item.id}
              ruta={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
              titles={item.title}
              descripcion={item.descripcion}
              id={item.id}
            />
          ))
        )}

      </main>
    </>
  )
}

export default ContenedorTarjetas
