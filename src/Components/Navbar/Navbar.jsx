import React from 'react';
import { Link, NavLink, Navigate } from 'react-router-dom';

const Navbar = ({ handleLogout }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg text-bg-dark">
         


                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {localStorage.getItem("isLoggedIn") && (
                            
                            
                            <>

                <div className='contenedor-inicio-home'>
                    <ul>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link textobtn"
                                activeclassname="activo"
                                aria-current="page"
                                to="/Home">Home</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="container-fluid">

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
                                    to="/ContenedorTarjetas">Comics</NavLink>
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
                        </ul>
                    </div>
                </div>
<div className='Nav-logout'>
    <ul>
                                <li className="nav-item">
                                    <Link
                                        style={{ cursor: 'pointer' }}
                                        className="nav-link"
                                        activeclassname="activo"
                                        onClick={handleLogout}
                                    >
                                        Cerrar Sesión
                                    </Link>
                                </li>

    </ul>
</div>
                            
                            </>
                        )

                        }
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
