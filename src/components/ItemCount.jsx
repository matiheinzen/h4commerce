import { useContext, useState } from "react";

const ItemCount = ({stock}) => {
  const [contador, totalContador] = useState(1);
  const sumar = () => {
    totalContador(contador + 1);
  };
  const restar = () => {
    totalContador(contador - 1);
  };
  return (
    <>

        {contador < 1 ? (
            <p>Esta cantidad no se permite</p>
        ) : (
          <button  onClick={restar} className="Detalles-btn">-</button>
        )}
        {contador}
        {contador < stock ? (
          <button onClick={sumar} className="Detalles-btn">+</button>
        ) : (
           <p> Mas de esta cantidad no se permite</p>
        )}
    </>
  );
};

export default ItemCount;
