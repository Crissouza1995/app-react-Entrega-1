import { useCartContext } from "../context/CartContext";
import { useFormContext } from "../context/FormContext";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import Typography from "@mui/material/Typography";
import LoadingBuy from "../ui/LoadingBuy";

const DispatchCheckout = ({orderId}) => {

  const variable = "se renderizo dispatch-checkout";

  console.log(variable);

  return (
    <div>
      <form>
        <>
          <Typography variant="h6" gutterBottom>
            Su numero de orden es:
          </Typography>

          {orderId ? (
            <Typography variant="h4">{orderId}</Typography>
          ) : (
            <LoadingBuy /> 
          )}

          <Typography variant="subtitle1"></Typography>
          <Typography variant="subtitle1" sx={{ my: 3 }}>Gracias por su compra!!</Typography>
          <List disablePadding>
          </List>
        </>
      </form>
    </div>
  );
};



export default DispatchCheckout;
