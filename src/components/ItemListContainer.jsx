import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Loader from "./Loader";
const ItemListContainer = () => {
  const [articulos, setArticulos] = useState([]);
  const { category } = useParams();
  const [loading, setLoading] = useState (true);
  useEffect(() => {
    setTimeout(()=>{
      const baseDatos = getFirestore();
      const articulosCollection = collection(baseDatos, "productos");
      getDocs(articulosCollection).then((querySnapshot) => {
        const articulos = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setArticulos(articulos);
      });
    setLoading(false)
    }, 2000)
  }, []);
  if (loading) {
    return <Loader/>
  }
  const catFilter = articulos.filter((art) => art.category === category);
  return (
    <div>
      <h2>Articulos de nuestra tienda</h2>
      {category ? <ItemList articulos={catFilter} /> : <ItemList articulos={articulos} />}   
    </div>
  );
};

export default ItemListContainer;