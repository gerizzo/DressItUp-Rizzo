import React from 'react';
import cartContext from "../../context/cartContext";
import { useContext } from "react";

const CARRITO = () => {
const { cart, removeItem, clearCart } = useContext(cartContext);
    if(cart.length === 0){
        return <h5 className='text-center mt-5'>Tu carrito se encuentra vacio.</h5>
    }

  return (
    <div>
        <div className='mb-5'>
            <h5 className='text-center'>Tu Carrito:</h5>
            <hr/>
            {cart.map((product) => (
                <div key={product.id}>
                    <h5 className='text-center'>{product.nombre.toUpperCase()} {product.color.toUpperCase()} ${product.precio} <button onClick={() => removeItem(product.id)}>X</button></h5>
                    <h5 className='text-center'>Cantidad: {product.quantity}</h5>
                    <hr/>
                </div>
            ))}
        </div>
        <div className='mt-4 text-center'>
            <button onClick={() => clearCart()}>Vaciar Carrito</button>
        </div>
    </div>
  )
}

export default CARRITO
