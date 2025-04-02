import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'

import AgregarCanal from './pages/AgregarCanal'
import DetalleCanal from './pages/DetalleCanal'
import AgregarVideo from './pages/AgregarVideo'

const App = () => {
  return (
        <BrowserRouter>
      <Header/>
    <Routes>
    <Route path='/'element={<Inicio/>}/>
    <Route path='inicio'element={<Inicio/>}/>
    <Route path="/canales/:id/:nombre" element={<DetalleCanal/>}/>
    <Route path='agregaruncanal'element={<AgregarCanal/>}/>
    <Route path="/agregarunvideo" element={<AgregarVideo/>}/>
    <Route path='*'element={<Inicio/>}/>
    </Routes>
      <Footer/>
        </BrowserRouter>
  )
}

export default App