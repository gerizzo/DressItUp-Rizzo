import { useState, useEffect } from "react";
import Item from '../Item/Item';
import './ItemList.css';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore , query, where} from "firebase/firestore";

const ItemList = () => {

    const { category } = useParams();
    const [items, setItems] = useState([]);
    const getProducts = () => {
        const dataBase = getFirestore();
        const querySnapshot = collection(dataBase, "products");
      
        if (category) {
          const newQuerySnapshot = query(querySnapshot, where("category", "==", category));
          getDocs(newQuerySnapshot)
            .then((response) => {
              const data = response.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
              });
              setItems(data);
            })
            .catch((error) => console.error(error));
        } else {
          getDocs(querySnapshot)
            .then((response) => {
              const data = response.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
              });
              setItems(data);
            })
            .catch((error) => console.error(error));
        }
    };
    
    useEffect(() => {
      getProducts();
    }, [category])
    


    return (
            <div className='row justify-content-around mt-4 itemList'>
                {items.map((product) => {
                    return (
                      <div className="col-4">
                        <Item product={product} key={product.id}/>
                      </div>
                    )
                })}
            </div>
    )
}

export default ItemList;
