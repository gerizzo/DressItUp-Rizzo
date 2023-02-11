import React from 'react';
import cartContext from "../../context/cartContext";
import { useContext } from "react";
import { collection, addDoc, getFirestore } from 'firebase/firestore';

const Cart = () => {
    const { cart, removeItem, clearCart } = useContext(cartContext);
    if(cart.length === 0){
        return <h5 className='text-center mt-5'>Tu carrito se encuentra vacio.</h5>
    }
    const createOrder = async () => {
        const db = getFirestore();
        const querySnapshot = collection(db, 'orders');
        const order = {
            buyer: {
                name: 'Gerardo Conrado Rizzo',
                phone: '2901524423',
                email: 'testing@test.com',
            },
            items: cart,
            total: cart.reduce((acc,curr) => acc + curr.precio * curr.quantity, 0),
        };
        try {
            await addDoc(querySnapshot, order);
            alert('ORDEN CREADA CON ÉXITO.')
        } catch (error) {
            console.log('ERROOOOR: ' + error);
        }
    };

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
            <button onClick={() => createOrder()}>Comprar</button>
        </div>
        <div className='mt-4 text-center'>
            <button onClick={() => clearCart()}>Vaciar Carrito</button>
        </div>
    </div>
  )
}

export default Cart
