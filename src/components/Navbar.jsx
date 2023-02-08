import React from 'react'
import Cardwidget from './Cardwidget'

const Navbar = () => {
  return (
    <>
      <Cardwidget/>
      <div><h1 className='titulo'>Bienvenidos a H4</h1></div>
      <ul>
        <li>Libreria</li>
        <li>Jugueteria</li>
        <li>Todos los articulos</li>
      </ul>
    </>
  )
}

export default Navbar