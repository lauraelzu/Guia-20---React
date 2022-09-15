import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css';

export default function NavBar() {
  return (
    <nav className='nav'>
      {/*se usa 'link' en lugar de 'a' y to='' en lugar de href="" para no recargar la página!!!*/}
      <Link className="link" to='/'>Inicio</Link>
      <Link className="link" to='/personajes'>Personajes</Link>
      <Link className="link" to='/buscador'>Buscador</Link>
    </nav>
  )
}

