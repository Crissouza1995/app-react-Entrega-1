import { useState, useEffect } from "react";
import { getProductsById } from "../asyncMock";
import { useParams } from "react-router-dom";
import { getProducts } from '../asyncMock'
import Item from "./Item";
import { Grid } from "@mui/material";
import ItemDetail from '../components/ItemDetail'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    
    const fetchData = async () => {
      const aux = await getProducts();
      const filtrado = aux.filter((element) => element.id === categoryId).at(0);      
      setProduct(filtrado)
    };

    fetchData();
    
  }, []);

  return (
    <div>
      <Grid container spacing={6} py={6}>
        <ItemDetail {...product} />
        </Grid>
    </div>
  );
};

export default ItemDetailContainer;