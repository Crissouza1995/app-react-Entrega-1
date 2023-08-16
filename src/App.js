
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  ItemListContainer,
  NavBar,
} from "./components";
import Cart from './components/Cart';
import * as React from 'react';
import ItemDetailContainer from './components/itemDetailContainer';
import CartProvider from './context/CartContext'



function App() {

console.log("App")


  return (
    
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemDetailContainer />} />
          <Route path='/productsCategory/:productsCategory' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
