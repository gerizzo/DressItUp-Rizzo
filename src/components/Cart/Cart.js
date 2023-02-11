import React from 'react';
import cartContext from "../../context/cartContext";
import { useContext } from "react";

const CARRITO = () => {
const { addItem } = useContext(cartContext);
  return (
    <div>CARRITO</div>
  )
}

export default CARRITO