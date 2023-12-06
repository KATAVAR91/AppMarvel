
import React from 'react'
import "./Tarjetas.css"
import { Link } from 'react-router-dom'

const Tarjetas = ({ titles, ruta, descripcion, id }) => {
    return (
        <>
            <main className='container'>

                <div className="card"
                    style={{ width: "18rem" }}>
                    <img src={ruta}
                        className="card-img-top"
                        alt="Spiderman"
                        titles='Spiderman' />

                    <div className="card-body">
                        <h5 className="card-title">{titles}</h5>
                        <p className='cart-text'>{descripcion}description</p>

                        <Link className="btn btn-primary" to={`/Tarjetas/${id}`}>
                            Ver más</Link>

                      

                    </div>

                </div>
            </main>
        </>
    )
}

export default Tarjetas

