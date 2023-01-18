import React from 'react';
import { Card, Image } from 'react-bootstrap';
import './Item.css';
import ItemCount from '../ItemCount/ItemCount';

const ProductCard = ({ product }) => {

  const onAdd = (cantidad) => {
    alert('Añadiste al futuro carrito... ' + cantidad + ' elementos. ')
  }

  return (
    <Card className='col-12 col-sm-5 col-md-5 col-lg-3 col-xl-3 m-1 mb-3 cardItem'>
      <Image className='imgCard' src={product.img} alt={product.nombre} />
      <Card.Body className='text-center'>
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Title>${product.precio}</Card.Title>
        <ItemCount stock={product.stock} onAdd={onAdd}/>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;