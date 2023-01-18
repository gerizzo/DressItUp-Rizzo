import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css';

const ProductCard = ({ product }) => {
  return (
    <Link state={product} to={`item/${product.id}`} className='titlesCard col-12 col-sm-5 col-md-5 col-lg-3 col-xl-3 m-1 mb-3'>
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
