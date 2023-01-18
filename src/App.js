import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='newArrivals' element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
