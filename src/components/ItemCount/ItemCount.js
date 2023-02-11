import React from 'react';
import { useState} from 'react';
import './ItemCount.css';

const ItemCount = ({ stock , onAdd}) => {
  const [contador, setContador] = useState(1);
  const restar = () => {
      if (contador !== 1) {
          setContador(contador - 1);
      }
  }
  const sumar = () => {
      if (contador + 1 <= stock) {
          setContador(contador + 1);
      }
  }
  
  React.useEffect(() => {
    onAdd(contador);
  }, [contador, onAdd]);
  
  return (
      <div>
          <div className='d-flex justify-content-center'>
          <button className='controlesItemCount' style={{ width: '38px' }} onClick={() => restar()}>-</button>
              <p>{contador}</p>
              <button className='controlesItemCount' style={{ width: '38px' }} onClick={() => sumar()}>+</button>
          </div>
      </div>
  )
}


export default ItemCount
