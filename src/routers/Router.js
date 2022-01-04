import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import Entrega from '../components/entrega/Entrega'
import Prestamo from '../components/prestamo/Prestamo'
import Home from '../components/home/Home'

export const Router = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar /> 
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/entrega" element={ <Entrega/> } />
          <Route path="/prestamo" element={ <Prestamo/> } />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}
