import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ContenedorTarjetas from './Components/contenedorTarjetas/ContenedorTarjetas';
import Login from './Components/Login/Login';
import { Route, Routes } from 'react-router';


const App = () => {
  return (
    <>
      <Navbar />

      <div className="marvel-title-container">
        <h2 className="marvel-title">MARVEL</h2> </div>

      <Routes>
        <Route path='/' element={<Login />} />
        < Route path='/tarjetas' element={<ContenedorTarjetas />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
