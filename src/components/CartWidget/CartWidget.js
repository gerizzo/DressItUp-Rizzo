import {BsCart} from "react-icons/bs";
import './CartWidget.css'
import { useContext } from "react";
import cartContext from "../../context/cartContext";
import { Link} from 'react-router-dom';


const CartWidget = (props) => {
  const { cart } = useContext(cartContext);

  return (
    <Link to="cart" className="decoration">
      <div className="flexContainer">
          <BsCart className="pointer"></BsCart>
          <p>{cart.length}</p>
      </div>
    </Link>
  )
}

export default CartWidget;
