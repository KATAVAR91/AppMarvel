import React, { useState } from 'react';
import './Login.css';

const Login = ({ handleLogin, usuario, setUsuario, password, setPassword, error }) => {
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
                            placeholder="Ingresa Usuario"
                            aria-label=" Username"
                            aria-describedby="basic-addon1"
                            value={usuario}
                            onChange={(e) => {
                                setUsuario(e.target.value)
                            }}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text"
                            id="basic-addon1">
                            Tu contraseña
                        </span>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Ingresa Contraseña"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                    </div>
                    <button onClick={handleLogin} type="button" className="btn btn-dark textobtn">Inicio Sesión</button>
                    {error && <p>{error}</p>}
                </div>

            </main>
        </>
    )
}

export default Login
