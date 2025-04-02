import React from 'react'
import { Link } from 'react-router-dom'
import MenuCanal from './MenuCanal'

const Header = () => {
  return (
<header id="header" className="header d-flex align-items-center sticky-top">
  <div className="container position-relative d-flex align-items-center justify-content-between">
    <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
      {/* Uncomment the line below if you also wish to use an image logo */}
      {/* <img src="assets/img/logo.png" alt=""> */}
      <h1 className="sitename">Revista Digital</h1>
    </a>
    <nav id="navmenu" className="navmenu">
    <ul>
            <li><Link to="/inicio" href="#" className="active">Inicio</Link></li>

            <li className="dropdown"><a href="#"><span>Canales</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
              <ul>


                <MenuCanal/>
               
                
                
              </ul>
            </li>



            
            <li><Link to="/agregaruncanal" href="#">Agrega un Canal</Link></li>
            <li><Link to="/agregarunvideo" href="#">Agrega un Video</Link></li>
            
           
        </ul>
      <i className="mobile-nav-toggle d-xl-none bi bi-list" />
    </nav>
    <div className="header-social-links">
      <a href="#" className="twitter"><i className="bi bi-twitter-x" /></a>
      <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
      <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
      <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
    </div>
  </div>
</header>

  )
}

export default Header