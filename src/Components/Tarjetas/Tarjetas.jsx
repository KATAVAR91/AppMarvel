
import React from 'react'
import "./Tarjetas.css"

const Tarjetas = ({ titles, ruta }) => {
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

                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>

                </div>
            </main>
        </>
    )
}

export default Tarjetas

