import React from 'react';
import { useState } from 'react';
import './ItemCount.css';
import { Button} from 'react-bootstrap';

const ItemCount = ({ stock , onAdd}) => {
  const [contador, setContador] = useState(0);
  const restar = () => {
      if (contador !== 0) {
          setContador(contador - 1);
      }
  }
  const sumar = () => {
      if (contador + 1 <= stock) {
          setContador(contador + 1);
      }
  }
  return (
      <div>
          <div className='d-flex justify-content-center'>
          <button className='controlesItemCount' style={{ width: '38px' }} onClick={() => restar()}>-</button>
              <p>{contador}</p>
              <button className='controlesItemCount' style={{ width: '38px' }} onClick={() => sumar()}>+</button>
          </div>
          <Button variant="primary" className='buttonCard' onClick={() => onAdd(contador)}>Añadir al Carro</Button>
      </div>
  )
}


export default ItemCount