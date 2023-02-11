import cartContext from "./cartContext"
import { useState } from "react"

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    // AÑADIR ELEMENTOS AL CARRITO

    const addItem = (item, quantity) => {
        const newProduct = {
            name: item.nombre,
            quantity: quantity
        }
        setCart([...cart, newProduct]);
    };

    const restarCantidad = (item, quantity) => {
        
    }

    // VACIAR CARRITO

    const clearCart = () => {
        setCart([]);
    }


  return (
    <cartContext.Provider value={{cart, addItem, clearCart}}>
        {children} 
    </cartContext.Provider>
  )
}

export default CartProvider;