import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import ItemDetail from "../components/ItemDetail";
import LoadingSpinner from "../ui/LoadingSpinner";

const ItemDetailContainer = () => {

  const [data, setData] = useState ({});
  const { categoryId }= useParams ();

  const [loading, setLoading] = useState(false);
 
  useEffect(() => {

    const querydb = getFirestore();
    const queryDoc = doc (querydb, 'products', categoryId);
    getDoc(queryDoc)
    .then(res => setData({id:res.id, ...res.data()}));

  
  }, [categoryId]);

  console.log(data)

  return loading ? (
    <LoadingSpinner/>
  ) : (
    <div>
      <Grid container spacing={6} py={6}>
        <ItemDetail {...data} />
      </Grid>
    </div>
  );
};

export default ItemDetailContainer;
