import React from "react";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../asyncMock";
import ItemList from './ItemList';
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParamns();

  useEffect(() => {

    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);                  
      });
  }, [categoryId]);

  return (
    <div>
      <div>
        <h1 className="title-style">Welcome to feca`s store</h1>
      </div>
      <ItemList products={products}/>
    </div>
  );
};

export default ItemListContainer;
