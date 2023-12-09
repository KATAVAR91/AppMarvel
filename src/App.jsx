import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ContenedorTarjetas from './Components/contenedorTarjetas/ContenedorTarjetas';
import DetailTarjetas from './Components/Tarjetas/DetailTarjetas';
import Footer from './Components/Footer/Footer';

function App() {
  
  const [error, setError] = useState(null);
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (usuario === '' || password === '') {
      setError('Los campos son obligatorios');
   
    } else {
   
      localStorage.setItem('isLoggedIn', true);

      navigate("/Home") 
      
    }
  };

  const handleLogout = () => {
  
    localStorage.removeItem('isLoggedIn');
    setError(null)
  };

  return (
    <>
      <Navbar handleLogout={handleLogout} />
      {/* <div className="marvel-title-container">
        <h1 className="marvel-title">MARVEL</h1>
      </div> */}
      <Routes>
        <Route
          path="/Home"
          element={localStorage.getItem("isLoggedIn") ? <Home /> : <Navigate to="/" />}
        />
        <Route path="/" element={<Login handleLogin={handleLogin}
          usuario={usuario}
          setUsuario={setUsuario}
          password={password}
          setPassword={setPassword}
          error={error}
          setError={setError}

        />} />

          <Route
            path="/DetailTarjetas/:id"
            element={localStorage.getItem("isLoggedIn") ? <DetailTarjetas /> : <Navigate to="/" />}
          />

        <Route
          path="/contenedorTarjetas"
          element={localStorage.getItem("isLoggedIn") ? <ContenedorTarjetas /> : <Navigate to="/" />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
