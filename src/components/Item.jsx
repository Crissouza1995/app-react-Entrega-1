import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";

const Item = ({ id, name, price, img, stock }) => {
  const [goToCart, setGotoCart] = useState(false);

  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGotoCart(true);
    addProduct(id, quantity, price, name, img);
  };

  return (
    <Card
      className="animate__animated animate__fadeIn"
      raised
      sx={{ padding: "20px" }}
    >
      <CardActionArea>
        <CardMedia component="img" height="400" image={img} alt={id} />
        <CardContent>
          <Typography variant="body1" color="text.secondary" noWrap>
            {name}
          </Typography>
        </CardContent>
        <Typography variant="subtitle1" color="text.primary" align="right">
          Price: {`$${price}`}
        </Typography>
      </CardActionArea>
      <CardActions
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <ItemCount initial={1} stock={stock} onAdd={onAdd}></ItemCount>
        <Link to={`/category/${id}`}>
          <Button variant="contained" size="small" color="primary">
            Ver Detalle
          </Button>
        </Link>
        <Typography
          variant="body1"
          color="text.secondary"
          noWrap
          sx={{
            padding: "20px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <strong style={{ color: "green", marginRight: "5px" }}>
            *Envío Gratis
          </strong>
        </Typography>
      </CardActions>
    </Card>
  );
};

export default Item;
