import productsData from '../../data/data.json';
import { useState, useEffect } from "react";
import Item from '../Item/Item';
import './ItemList.css';


const ItemList = () => {
    const [items, setItems] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            setItems(productsData);
        }, 2000);
    }, []);
    return (
            <div className='row justify-content-around mt-4 itemList'>
                {items && items.map((product) => {
                    return <Item product={product} key={product.id}/>
                })}
            </div>
    )
}

export default ItemList
