import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './ItemDetailContainer.css';
import { getFirestore, doc, getDoc } from 'firebase/firestore' ;

const ItemDetailContainer = () => {
    const [singleProduct, setSingleProduct] = useState({})
    const {id} = useParams();

    const getProduct = () => {
        const db = getFirestore();
        const querySnapshot = doc(db, "products", id);
        return getDoc(querySnapshot)
        .then((response) => {
            setSingleProduct({id: response.id, ...response.data()})
         })
        .catch((err) => console.error(err)); 
    }

    useEffect(() => {
      getProduct();
    }, [])

    return (
        <div>
            <ItemDetail product={singleProduct}/>
        </div>
    )
}
export default ItemDetailContainer