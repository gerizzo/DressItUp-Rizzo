import { useState } from 'react';
import gifLoading from '../../assets/gif/loading.gif';
import ItemList from '../ItemList/ItemList';
import { Container } from 'react-bootstrap';

const ItemListContainer = (props) => {

  return (
    <div>
      <Container fluid>
          <ItemList/>
      </Container>
    </div>
  )
}

export default ItemListContainer