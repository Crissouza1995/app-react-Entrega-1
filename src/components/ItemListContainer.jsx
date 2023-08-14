import React, { useState, useEffect } from "react";
import { getProducts } from "../asyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import LoadingSpinner from '../ui/LoadingSpinner';

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { productsCategory } = useParams();

 
  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      const allProducts = await getProducts();
      const filteredProducts = productsCategory
        ? allProducts.filter(product => product.category === productsCategory)
        : allProducts;
      setProducts(filteredProducts);
      setLoading(false);
    };
    
    fetchData();
    
  }, [productsCategory]);

  return loading ? (
    
    <LoadingSpinner/>

  ) : (
    <div>
      <div>
        <h1 className="title-style">Welcome to feca's store</h1>
      </div  >
      <ItemList products={products} />
      </div>
  );
};

export default ItemListContainer;


