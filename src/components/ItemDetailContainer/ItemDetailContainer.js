import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import productsData from '../../data/data.json';

const ItemDetailContainer = () => {
    const {id} = useParams();
    const product = productsData.find(p => p.id == id);
    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}
export default ItemDetailContainer


