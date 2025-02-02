import React from 'react'
import { Link } from 'react-router-dom'
const Menu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Ecommerce</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/liste">Liste des articles</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/add">Ajout des articles</Link>
      </li>
     
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Menu
