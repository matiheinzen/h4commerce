import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
      const baseDatos = getFirestore();
      const productsCollection = collection(baseDatos, "productos");
      getDocs(productsCollection).then((querySnapshot) => {
        const articulos = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setData(articulos);
      });
  }, []);
  return <ItemDetail articulos={data} />;
};
export default ItemDetailContainer;