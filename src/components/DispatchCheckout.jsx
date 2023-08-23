import { useCartContext } from "../context/CartContext";
import { useFormContext } from "../context/FormContext";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import Typography from "@mui/material/Typography";

import LoadingSpinner from "../ui/LoadingSpinner";
const DispatchCheckout = () => {

  const variable = "se renderizo dispatch-checkout";

  console.log(variable);

  return (
    <div>
      <form>
        <>
          <Typography variant="h6" gutterBottom>
            Su numero de orden es:
          </Typography>
          
          <Typography variant="subtitle1">HJSADTBFASDHC34247DSAH</Typography>
          <Typography variant="subtitle1"></Typography>
          <Typography variant="subtitle1">Gracias por su compra!!</Typography>
          <List disablePadding>
            <ListItem key={1} sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Total de su compra:" />
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700 }}
              ></Typography>
            </ListItem>
          </List>
        </>
      </form>
    </div>
  );
};

export default DispatchCheckout;
