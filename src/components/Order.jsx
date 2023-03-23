import { useContext, useState } from "react";
import {collection, getFirestore, addDoc} from "firebase/firestore";
import { CartContext} from "../context/CartContext";
import Swal from "sweetalert2";


const Order = () => {
    const [orderId, setOrderId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [location, setLocation] = useState("");
    const [productos] = useContext(CartContext);


   
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" ||  email === "" || number === "" || location === ""){
            Swal.fire({
                title: "Advertencia!",
                text: "Complete todos los campos antes de finalizar el pedido",
                icon: "warning",
                confirmButtonText: "Cerrar"            
            })
        }else{
            addDoc(ordersCollection, order).then(({id})=>setOrderId(id));
            Swal.fire({
                title: "Exitoso!",
                text: "su pedido fue exitoso!",
                icon: "success",
                confirmButtonText: "Cerrar"            
            })
        }
    };

    const baseDatos = getFirestore();
    const ordersCollection = collection(baseDatos, "orden")
    const order = {
            name,
            email,
            number,
            location,
            productos,
    }
    return(
        <div>
            <div  className="form">
                <h2>Datos:</h2>
                <form onSubmit = {handleSubmit}>
                        <p> NOMBRE: </p>
                        <input type="text" placeholder="nombre y apellido*" onChange={(e)=>setName(e.target.value)}/>
                        <p> EMAIL: </p>
                        <input type="email" placeholder="email*" onChange={(e)=>setEmail(e.target.value)}/>
                        <p> TELEFONO: </p>
                        <input type="number" placeholder="telefono*" onChange={(e)=>setNumber(e.target.value)}/>
                        <p> DIRECCION: </p>
                        <input type="text" placeholder="direccion*" onChange={(e)=>setLocation(e.target.value)}/>
                        <button type="submit" className="Detalles-btn">Enviar datos de la compra</button>

                </form>
            <p>Su codigo de compra es: {orderId}</p>
            </div>
        </div>
    );
};
export default Order;

