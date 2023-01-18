import {BsCart} from "react-icons/bs";
import './CartWidget.css'

const CartWidget = (props) => {
    let clickeado = () => {
        alert('Proximamente...')
    }
  return (
    <div className="flexContainer">
        <BsCart className="pointer" onClick={clickeado}></BsCart>
        <p>0</p>
    </div>
  )
}

export default CartWidget;