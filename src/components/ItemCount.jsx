import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext"

const ItemCount = ({stock, id, price, name, image, description }) => {
  const [cart, setCart] = useContext(CartContext);
  const [count, setCount] = useState(1);
  const addQty = () => {
    setCount(count + 1);
  };
  const substractQty = () => {
    setCount(count - 1);
  };
  const addToCart = () => {
    setCart((currArts) => {
      const isArtFound = currArts.find((art) => art.id === id);
      if (isArtFound) {
        return currArts.map((art) => {
          if (art.id === id) {
            return { ...art, quantity: art.quantity + count };
          } else {
            return art;
          }
        });
      } else {
        return [...currArts, { id, quantity: count, price, name, image, description }];
      }
    }) 
  };
  return (
    <>

        {count < 1 ? (
            <p>Esta cantidad no se permite</p>
        ) : (
          <button  onClick={substractQty} className="Detalles-btn">-</button>
        )}
         <button  onClick={() => addToCart()} className="Detalles-btn">Comprar {count}</button>
        {count < stock ? (
          <button onClick={addQty} className="Detalles-btn">+</button>
        ) : (
           <p> No se permite mas de esta cantidad</p>
        )}
    </>
  );
};

export default ItemCount;
