import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const [cart ] = useContext(CartContext)
  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
  return (
    <>
    <div><span className="material-symbols-outlined">shopping_cart</span><span>{quantity}</span></div>    
    </>
  )
}

export default CartWidget