import React from 'react'
import "./Login.css"

const Login = () => {
    return (
        <>
        
       
            

            <main className='CotainerLogin'>

                <div className='contenedorformulario'>

                    <div className="input-group mb-3">
                        <span className="input-group-text"
                            id="basic-addon1">
                            Tu usuario
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Usuario"
                            aria-label="Username"
                            aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text"
                            id="basic-addon1">
                            Tu contreña
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Contraseña"
                            aria-label="Username"
                            aria-describedby="basic-addon1" />
                    </div>
                    <button type="button" class="btn btn-dark textobtn">Inicio Sesión</button>
                  
                </div>

            </main>
        </>
    )
}

export default Login
