import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = ({ articulos }) => {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);
  useEffect(() => {
    const baseDatos = getFirestore();
    const artRef = doc(baseDatos, "productos", `${id}`);
    getDoc(artRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      } else {
        console.log("no existe archivo");
      }
    });
  }, []);
  const artFilter = articulos.filter((art) => art.id == id);
  return (
    <>
    {artFilter.map((art) => (
      <div key={art.id}>
        <div className="tarjeta">
          <div>
            <img src={art.image} alt="productos" className="imgs"/>
          </div>
          <div>
            <h2>{art.name}</h2>
            <p>Descripcion: {art.description}</p>
            <p>Categoria: {art.category}</p>
            <p>Stock: {art.stock}</p>
            <p>Precio: ${art.price}</p>
          </div>
          <div className="contador">
              <ItemCount
                stock={art.stock}
                id={art.id}
                price={art.price}
                name={art.name}
                image={art.image}
                description={art.description}
              />
            </div>
        </div>
      </div>
    ))}
    </>
    );
  };

export default ItemDetail;
