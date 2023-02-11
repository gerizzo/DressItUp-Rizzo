import cartContext from "./cartContext"
import { useState } from "react"

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        let newCart;
        let product = cart.find((prod) => prod.id === item.id);
        if (product) {
            if (product.quantity + quantity > product.stock) {
                alert('NO TENEMOS TANTO STOCK DISPONIBLE, MÁXIMO: ' + product.stock);
                return;
            }
            product.quantity += quantity;
            newCart = [...cart];
        } else {
            product = {
                nombre: item.nombre,
                id: item.id,
                precio: item.precio,
                img: item.img,
                color: item.color,
                quantity: quantity,
                stock: item.stock
            }
            newCart = [...cart, product];
        }
        setCart(newCart)
    };

    const removeItem = (ProductId) => {
        setCart(cart.filter((product) => product.id !== ProductId))
    }

    // VACIAR CARRITO

    const clearCart = () => {
        setCart([]);
    }

  return (
    <cartContext.Provider value={{cart, addItem, clearCart, removeItem}}>
        {children} 
    </cartContext.Provider>
  )
}

export default CartProvider;
