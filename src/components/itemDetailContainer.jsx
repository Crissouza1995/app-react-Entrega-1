import { useState, useEffect } from "react";
import { getProductsById } from "../asyncMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getProducts } from '../asyncMock'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  console.log("re")
  const { itemId } = useParams();
  const getAllProducts = async () => {

    const productsAux = await getProducts();
    console.log("products",productsAux)
  };

  useEffect(() => {
    void getAllProducts() 
  }, []);

  useEffect(() => {
    /* getProductsById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });*/
  }, [itemId]);

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
