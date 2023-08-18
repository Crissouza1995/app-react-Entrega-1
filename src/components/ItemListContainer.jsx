import React, { useState, useEffect } from "react";
import { getProducts } from "../asyncMock";
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import LoadingSpinner from '../ui/LoadingSpinner';

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { productsCategory } = useParams();
  const [data, setData]= useState()


  useEffect(() => {

    const querydb = getFirestore();
    const queryCollection = collection (querydb,'products');

    const filteredProducts = (allProducts) => {
      return productsCategory ? allProducts.filter(f=> f.category === productsCategory ) : allProducts
    }

    getDocs(queryCollection)
      .then(res=>{
        setProducts(filteredProducts(res.docs.map(product => ({id: product.id, ...product.data() }))))
        console.log('products',products)
        setLoading(false)
      })

  
  
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


