
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
import { FormProvider } from './context/FormContext';
import CheckOut from './components/CheckOut'


function App() {

  console.log("App")

  return (

    <FormProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemDetailContainer />} />
            <Route path='/productsCategory/:productsCategory' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/CheckOut' element={<CheckOut />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </FormProvider>

  );
}

export default App;
