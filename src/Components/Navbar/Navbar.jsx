import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg text-bg-dark" >





                <div className="container-fluid">
                    <li className="nav-item">
                        <NavLink
                            className="nav-link textobtn"
                            activeclassname="activo"
                            aria-current="page"
                            to="/Home">Home</NavLink>
                    </li>

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
                                <NavLink
                                    className="nav-link textobtn"
                                    activeclassname="activo"
                                    aria-current="page"
                                    to="/tarjetas">Comics</NavLink>
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
                                    className="nav-link textobtn no-list-style"
                                    activeclassname="activo"
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
