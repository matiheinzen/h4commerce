import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, name, stock, category, image}) => {
  return(
    <div className='contenedor-tarjetas'>
      <div className='tarjeta'> 
            <div key={id}>
              <img src={image} alt="producto" className='imgs' />
              <h1>{name}</h1>
              <p>Categoria: {category}</p>
              <p> Stock: {stock}</p>
              <Link to={`/item/${id}`}><button className='Detalles-btn'>Detalles</button></Link>
            </div>
      </div>
    </div> 
  )
}

export default Item