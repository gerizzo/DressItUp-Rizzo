import gifLoading from '../assets/gif/loading.gif';

const ItemListContainer = (props) => {
  return (
    <div className="mt-5">
        <h3>Estado del Sitio: {props.estado}</h3>
        <br></br>
        <img src={gifLoading}></img>
    </div>
  )
}

export default ItemListContainer