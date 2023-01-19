import ItemList from '../ItemList/ItemList';
import { Container } from 'react-bootstrap';

const ItemListContainer = () => {
  return (
    <div>
      <Container fluid>
          <ItemList/>
      </Container>
    </div>
  )
}

export default ItemListContainer