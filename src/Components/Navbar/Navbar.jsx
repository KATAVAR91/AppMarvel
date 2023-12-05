import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg text-bg-dark" >

         

                <div className="container-fluid">
                    <NavLink
                        className="navbar-brand textobtn"
                        activeclassName="activo"
                        to='/tarjetas'>
                        Home
                    </NavLink>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link textobtn"
                                    aria-current="page"
                                    href="#">Comics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link textobtn"
                                    href="#">Series</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link textobtn"
                                    href="#">Personajes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link textobtn"
                                    href="#">Creadores</a>
                            </li>

                            {/* <li className="nav-item">
                                <NavLink
                                    className="nav-link textobtn"
                                    activeclassname="activo"
                                    to='/'>
                                    Iniciar Sesión
                                </NavLink>
                            </li> */}
                        </ul>
                        
                    </div>
                    {/* <div className='contenedorinicio'>
                        <ul>
                         <li className="nav-item1">
                                <NavLink
                                    className="nav-link textobtn"
                                    activeclassname="activo"
                                    to='/'>
                                    Iniciar Sesión
                                </NavLink>
                            </li>
                        </ul>
                    </div> */}


<div className='contenedorinicio'>
            <ul>
              <li className="nav-item1">
                <NavLink
                  className="nav-link textobtn no-list-style" // Agregamos una nueva clase
                  activeClassName="activo"
                  to='/'>
                  Iniciar Sesión
                </NavLink>
              </li>
            </ul>
          </div>

                </div>
            </nav>

           
        </>
    )
}

export default Navbar
