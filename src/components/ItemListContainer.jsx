import React, { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../asyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
     
      setProducts([ {
        id: "1",
        name: "Nicaragua Single Origin",
        price: 2000,
        category: "coffe beans",
        img: "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FNicaragua-Single-425x425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        stock: 250,
        description:"Mildly roasted coffee with sweet notes of melon, the freshness of lemon and nuts.",
      }]);
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
