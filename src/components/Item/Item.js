import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css';

const ProductCard = ({ product }) => {
  return (
    <Link state={product} to={`item/${product.id}`} className='titlesCard m-1 mb-4 col-4'>
      <Card className='cardItem'>
        <Image className='imgCard' src={product.img} alt={product.nombre} />
        <Card.Body className='text-center'>
          <Card.Title>{product.nombre}</Card.Title>
          <Card.Title>${product.precio}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default ProductCard;
