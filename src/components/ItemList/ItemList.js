import productsData from '../../data/data.json';
import { useState, useEffect } from "react";
import Item from '../Item/Item';
import './ItemList.css';
import { useParams } from 'react-router-dom';

const ItemList = () => {
const [items, setItems] = useState([]);
const [originalItems, setOriginalItems] = useState([]);
const {category} = useParams();

useEffect(() => {
    setTimeout(() => {
        setOriginalItems([...productsData]);
        setItems([...productsData]);
    }, 2000);
}, []);

useEffect(() => {
    if(category){
        const filterProducts = [...originalItems].filter((product) => product.categoria === category);
        setItems(filterProducts)
    } else {
        setItems([...originalItems]);
    }
}, [category, originalItems])

return (
        <div className='row justify-content-around mt-4 itemList'>
            {items.map((product) => {
                return (
                    <Item product={product} key={product.id}/>
                )
            })}
        </div>
)
}

export default ItemList;
