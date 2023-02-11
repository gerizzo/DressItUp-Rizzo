import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';
import { Button } from 'react-bootstrap';
import { useContext, useState } from "react";
import cartContext from "../../context/cartContext";

export const ItemDetail = ({product}) => {

  const { addItem } = useContext(cartContext);
  const [contador, setContador] = useState(1);
  const updateContador = (newContador) => {
    setContador(newContador);
  };
  return (
    <div className="container-fluid">
        <div className="col-12 text-center mt-3">
          <img src={product.img} width='10%' className="imgDetail" alt={product.nombre}/>
          <h1>{product.nombre}</h1>
          <h1>{product.color}</h1>
          <h1>${product.precio}</h1>
          <ItemCount stock={product.stock} onAdd={updateContador} />
          <Button variant="primary" className='button' onClick={() => addItem(product, contador)}>Agregar al Carrito</Button>
        </div>
    </div>
  );
};

export default ItemDetail;
          

