import React from 'react'

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
        <li><a href="index.html" className="active">Inicio</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="single-post.html">Single Post</a></li>
        <li className="dropdown"><a href="#"><span>Canales</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
          <ul>
            <li className="dropdown"><a href="#"><span>Canales</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
              <ul>
                <li><a href="#">Deep Dropdown 1</a></li>
                <li><a href="#">Deep Dropdown 2</a></li>
                <li><a href="#">Deep Dropdown 3</a></li>
                <li><a href="#">Deep Dropdown 4</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a href="contact.html">Contact</a></li>
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