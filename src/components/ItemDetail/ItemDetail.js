import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';

export const ItemDetail = ({product}) => {
  const onAdd = (cantidad) => {
    alert('Añadiste al futuro carrito... ' + cantidad + ' elementos. ')
  }
  return (
    <div className="container-fluid">
        <div className="col-12 text-center mt-3">
          <img src={product.img} width='10%' className="imgDetail"/>
          <h1>{product.nombre}</h1>
          <h1>{product.color}</h1>
          <h1>${product.precio}</h1>
          <ItemCount stock={product.stock} onAdd={onAdd}/>
        </div>
    </div>
    
  )
}
