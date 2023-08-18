
import { useState } from "react";
import { Button, Typography, CardActions, CardContent } from "@mui/material";


const ItemCount = ({stock, onAdd, initial}) => {

    const [count, setCount]= useState(initial);
    
    const sumar = () =>{
        if (count < stock ){
            setCount(count+1)
        }
    }

    const restar =() => {
        if (count > 0){
            setCount(count-1)
        }
    }

  return (
    <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
      <Button variant="outlined" onClick={restar} size="small" color="primary">
        -
      </Button>

      <CardContent>

      <Typography variant="h9" color="text.primary" align="right">
        {count}
      </Typography>

      </CardContent>

      <Button variant="outlined" onClick={sumar} size="small" color="primary">
        +
      </Button>

      <Button variant="contained" size="small" color="primary" disabled={count === 0} onClick={()=>onAdd(count)}>
        Agregar al carrito
      </Button>

    </CardActions>
  );
};

export default ItemCount;
