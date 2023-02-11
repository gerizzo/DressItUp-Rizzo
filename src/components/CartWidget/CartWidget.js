import {BsCart} from "react-icons/bs";
import './CartWidget.css'
import { useContext } from "react";
import cartContext from "../../context/cartContext";

const CartWidget = (props) => {
  const { cart } = useContext(cartContext);

  return (
    <div className="flexContainer">
        <BsCart className="pointer"></BsCart>
        <p>{cart.length}</p>
    </div>
  )
}

export default CartWidget;