import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import DetalleCanales from './pages/DetalleCanales'

const App = () => {
  return (
        <BrowserRouter>
      <Header/>
    <Routes>
    <Route path='/'element={<Inicio/>}/>
    <Route path='inicio'element={<Inicio/>}/>
    <Route path='detallecanales'element={<DetalleCanales/>}/>
    <Route path='*'element={<Inicio/>}/>
    </Routes>
      <Footer/>
        </BrowserRouter>
  )
}

export default App