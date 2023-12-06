import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import ContenedorTarjetas from './Components/contenedorTarjetas/ContenedorTarjetas';
import Footer from './Components/Footer/Footer';
import DetailTarjetas from './Components/Tarjetas/DetailTarjetas';


const App = () => {
  return (
    <>
      <Navbar />
      <div className="marvel-title-container">
        <h2 className="marvel-title">MARVEL</h2> </div>

      <Routes>
        <Route path='/' element={<Login />} />
        < Route path='/tarjetas' element={<ContenedorTarjetas />} />
        <Route path='/DetailTarjetas/:id' element={<DetailTarjetas />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
