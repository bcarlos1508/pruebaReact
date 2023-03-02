
import React from 'react'
import CartWidget from '../cartWidget/cartWidget'
import './navBar.css'

function NavBar() {
  return (
    <div className='nav'>
              <nav className="navbar navbar-expand-lg bg-body-tertiary">
                  <div className="container-fluid">
                    <a className="navbar-brand" href="#"><strong>prueba</strong></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        <a className="nav-link active" aria-current="page" href="#">Quienes somos</a>
                        <a className="nav-link active" href="#">Productos</a>
                        <a className="nav-link active" href="#">Contacto</a>
                      </div>
                    </div>
                  </div>
                  <CartWidget />
                </nav>
    </div>
  )
}

export default NavBar;