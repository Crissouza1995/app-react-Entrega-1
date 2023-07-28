import React, { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../asyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
     const aux = await getProducts();
     setProducts(aux);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h1 className="title-style">Welcome to feca's store</h1>
      </div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;