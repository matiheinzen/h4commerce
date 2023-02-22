import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ articulos }) => {
  const { id } = useParams();
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
              <ItemCount stock={art.stock}/>
            </div>
        </div>
      </div>
    ))}
    </>
    );
  };

export default ItemDetail;
