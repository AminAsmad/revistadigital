import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_CANALES = 'http://localhost/backendrd/api/canales/get/';


const MenuCanal = () => {
    const [datos, setDatos] = useState([])
    const getDatos = async () => {
        try {
            const response = await fetch(API_CANALES);
            const data = await response.json();
            console.log(data)
            setDatos(data);
        } catch (error) {
            console.error(error)
        }
    };
    useEffect(() => {
        getDatos();
    }, []);

  return (
    <>
    {datos && datos.map((item, index) => (
         <li key={index}><Link to={`/canales/${item.id}/${item.nombre}`}  href="#">{item.nombre}</Link></li>
    ))}

    </>
  )
}

export default MenuCanal