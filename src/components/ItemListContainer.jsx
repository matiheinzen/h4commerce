import ItemList from "./ItemList";
import Data from "../data.json"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();
  const catFilter = Data.filter((art) => art.category === category);
  return (
    <div>
      <h2>Articulos de nuestra tienda</h2>
      {category ? <ItemList articulos={catFilter} /> : <ItemList articulos={Data} />}
    </div>
  );
};

export default ItemListContainer;