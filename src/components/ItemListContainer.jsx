import React, { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../asyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { productsCategory } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      
      const allProducts = await getProducts();

      const filteredProducts = productsCategory
        ? allProducts.filter(product => product.category === productsCategory)
        : allProducts;
      setProducts(filteredProducts);
    };

    fetchData();
  }, [productsCategory]);

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


