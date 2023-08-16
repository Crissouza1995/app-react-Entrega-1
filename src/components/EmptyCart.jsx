import Typography from "@mui/material/Typography";
import { CartEmptyIcon } from "../icons/CartEmptyIcon";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../components/EmptyCart.css";

const EmptyCart = () => (
  <>
    <Box
      sx={{
        width: "50vh",
        height: "50vh",
        margin: "0 auto",
        backgroundColor: "#f2f2f2",
        p: 2,
      }}
    >
      <div style={{ width: "50vh", height: "50vh", margin: "0 auto", textAlign: "center" }}>
        <Typography variant="h5" align="center" sx={{ my: 5 }}>
          No hay productos en el carrito
        </Typography>

        <div style={{ width: "100px", height: "100px", margin: "0 auto" }}>
          <CartEmptyIcon width="100%" height="100%" />
        </div>

        <Typography variant="body1" align="center" sx={{ mt: 2 }}>
          ¡Agrega productos para comenzar a comprar!
        </Typography>

        <Button sx={{ my: 2, color: "black", display: "block" }}>
          
        </Button>

          <Link to="/">
          <Button variant="contained" size="small" color="primary" >
            Descrubri nuestros Productos
          </Button>
          </Link>
          
        
      </div>
    </Box>
  </>
);

export default EmptyCart;
