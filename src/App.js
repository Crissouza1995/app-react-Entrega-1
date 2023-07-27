
import './App.css';
import { Browser, BrowserRouter, Routes, route } from 'react-router-dom';
import {
  ItemListContainer,
  NavBar,
} from "./components";
import * as React from 'react';
import ItemDetailContainer from './components/itemDetailContainer';




function App() {


  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <route path='/' element={<ItemListContainer />} />
          <route path='/category/:categoryId' element={<ItemListContainer />} />
          <route path='/item/:itemId' element={<ItemDetailContainer />} />
          <route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
      <ItemListContainer />
    </div>
  );
}

export default App;
