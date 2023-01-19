import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='*' element={<div><h3 className='text-center mt-5'>Ups... La ruta deseada no existe</h3></div>}/>
        <Route path='/category/:category' element={<ItemListContainer/>}/>
        <Route path='/category/:category/item/:id' element={<ItemDetailContainer/>}/>
        <Route path="item/:id" element={ <ItemDetailContainer/> }/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;