import React from 'react';
import './CartCounter.css';
import {useState} from 'react';

const CartCounter = ({cont,  stock}) => {
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

export default CartCounter