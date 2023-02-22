import React from 'react'
import CartWidget from './CartWidget'
import logo from '/assets/logo.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='NavBar'>
      <Link to={"/"}><button className='NavBar NavBar-btn'><img src={logo} alt="LOGOnavbar"/><h1>H4 LIBRERIA</h1></button></Link>
        <ul>
          <Link to={"/catalogue"}><li><button className='NavBar NavBar-btn'> TODO EL CATALOGO</button></li></Link>
          <Link to={`/category/${"LIBRERIA"}`}><li><button className='NavBar NavBar-btn'>LIBRERIA</button></li></Link>
          <Link to={`/category/${"JUGUETERIA"}`}><li><button className='NavBar NavBar-btn'>JUGUETERIA</button></li></Link>
        </ul>
        <Link to={"/cart"}><button className='NavBar NavBar-btn'><CartWidget/></button></Link>
      </div>
    </>
  )
}

export default Navbar