import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import productsData from '../../data/data.json';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const {id} = useParams();
    // eslint-disable-next-line
    const product = productsData.find(p => p.id == id);
    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}
export default ItemDetailContainer


