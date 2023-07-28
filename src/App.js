
import './App.css';
import { Browser, BrowserRouter, Routes, Route } from 'react-router-dom';
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
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
      <ItemListContainer />
    </div>
  );
}

export default App;
