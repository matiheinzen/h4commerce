import {useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Order from "./Order";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);;
  const [setTotal] = useState([])
  const removeArt = (id) =>{
    setCart(cart.filter((art)=>art.id !== id))
  }
  const removePantalla = ()=>{
    setCart([])
  }
  const total = cart.map((art)=>art.price*art.quantity)
  setTotal[total]
  const compraFinal =total.reduce((total, art)=>total+art, 0)
  return (
  <>
    <h2>Su carrito de compras</h2>
      {cart.map((art) => {
        return(
          <div className="contenedor-tarjetas" key={art.id}>
            <div  className="tarjeta">
              <div className="">
                <img src={art.image} alt="producto" className='imgs'/>
                <h3>{art.name} <button className="NavBar-btn" onClick={() => removeArt(art.id)}><span className="material-symbols-outlined">delete_forever</span></button></h3>
                <p>{art.description}</p>
                <p> cantidad seleccionado: {art.quantity}</p>
                <p>total ${art.quantity*art.price}</p>
              </div>
            </div>
          </div>
        );
      })
      }
      {compraFinal > 0 ? (
        <div>
          <h2>El total de su compra es ${compraFinal}</h2>
          <Order/>
          <Link to={"/"}><button className="Detalles-btn final" onClick={() => removePantalla()}>Limpiar Carrito</button></Link>
        </div>
        ) : (
          <div>
            <h2>se encuntra vacio<span className="material-symbols-outlined">sentiment_sad</span></h2>
          </div>
        )}
  </>
  )
}

export default Cart