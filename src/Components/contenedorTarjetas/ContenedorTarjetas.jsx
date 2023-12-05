import React, { useEffect, useState } from 'react'
import Tarjetas from '../Tarjetas/Tarjetas'
import "./contenedortarjetas.css"
import axios from 'axios';

const ContenedorTarjetas = () => {
  const [datos, setDatos]=useState([]);
  const ts=5;
  const key="8f40f8fda998059f791b0df1a18f02d1";
  const hash="16cf116468274d95c21fe89b06107310";
  const categoria="comics";
  const url=`http://gateway.marvel.com/v1/public/${categoria}?ts=${ts}&apikey=${key}&hash=${hash}`;

  useEffect(() => {
   const solicitud= async() => {
    try {
      const respuesta= await axios.get(url)
      console.log(respuesta.data.data.results);
      setDatos(respuesta.data.data.results);
    } catch (error) {
      console.error("hubo un error:", error);
    }
    
   }
  
   solicitud();
    
  }, [])
  
  
  return (
    <>
      <main className='contenedortarjetas'>
      {/* <Tarjetas ruta="https://cdn.marvel.com/u/prod/marvel/i/mg/6/b0/6553ccd72438e/detail.jpg" 
      title="SpiderMan"/>

      <Tarjetas ruta="https://cdn.marvel.com/u/prod/marvel/i/mg/8/60/6553cca0c0c41/detail.jpg"
      title="SpiderWoman"/>

      <Tarjetas ruta="https://cdn.marvel.com/u/prod/marvel/i/mg/9/50/6509dde171eb3/detail.jpg"
      title="DareDevil"/>

      <Tarjetas ruta="https://cdn.marvel.com/u/prod/marvel/i/mg/6/e0/6565fe6772a4a/detail.jpg"
      title="MsMarvel"/>

      <Tarjetas ruta="https://cdn.marvel.com/u/prod/marvel/i/mg/4/03/6526b186a6314/detail.jpg" 
      title="The Avenger United"/>

      <Tarjetas ruta="https://cdn.marvel.com/u/prod/marvel/i/mg/d/a0/574367527b063/detail.jpg"
      title="The Avenger Revolution"/>

      <Tarjetas ruta="https://cdn.marvel.com/u/prod/marvel/i/mg/9/c0/6509dcc939c3b/detail.jpg"
      title="Marvel Voices"/>

      <Tarjetas ruta="https://cdn.marvel.com/u/prod/marvel/i/mg/6/30/6509ddca82512/detail.jpg"
      title="The Avenger Revolution"/> */}


{datos.map((item)=>(
      <Tarjetas
      key={item.id}
      ruta={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
      titles={item.title}
      />
      ))}
      </main>
    </>
  )
}

export default ContenedorTarjetas
