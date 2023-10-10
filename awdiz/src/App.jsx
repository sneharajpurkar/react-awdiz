import './App.css'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Homepage from './components/Homepage';
import { Route, Routes } from 'react-router-dom';
import AppProducts from './components/Add-products';
import Navbar from './components/Navbar';
import SingleProductpage from './components/SingleProductpage'
import ShowProducts from './components/Cart-Products';
import Cart from './components/Cart-Products';
import SearchProduct from './components/SearchProduct'
 
function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/navbar' element={<Navbar />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/homepage' element={<Homepage />} />
        <Route exact path='/homepage/:idDrink' element={<SingleProductpage/>}/>
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/addproducts' element={<AppProducts />} />
        <Route exact path='/showproducts' element={<ShowProducts />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/search/:strDrink' element={<SearchProduct />} />
      </Routes>
    </div>
  );

}

export default App;