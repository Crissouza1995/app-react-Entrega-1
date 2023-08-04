import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../asyncMock";
import { Grid } from "@mui/material";
import ItemDetail from "../components/ItemDetail";
import LoadingSpinner from "../ui/LoadingSpinner";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const aux = await getProducts();
      const filtrado = aux.filter((element) => element.id === categoryId).at(0);
      setProduct(filtrado);
      setLoading(false);
    };

    fetchData();
  }, []);

  return loading ? (
    <LoadingSpinner/>
  ) : (
    <div>
      <Grid container spacing={6} py={6}>
        <ItemDetail {...product} />
      </Grid>
    </div>
  );
};

export default ItemDetailContainer;
