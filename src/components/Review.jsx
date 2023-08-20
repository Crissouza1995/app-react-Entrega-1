
import { useCartContext } from "../context/CartContext";
import { useFormContext } from "../context/FormContext";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import Typography from "@mui/material/Typography";

const Review = () => {
  const { totalCartPrice } = useCartContext();

  const { formData } = useFormContext();

  return (
    <form onSubmit>
      <>
        <Typography variant="h6" gutterBottom>
          Datos de Envio: 
        </Typography> 

        <Typography variant="subtitle1">
          Nombre y Apellido: {formData.firstName} {formData.lastName}
        </Typography>
        <Typography variant="subtitle1">
          Dirección de Envío: {formData.address}
        </Typography>
        <Typography variant="subtitle1">
          {formData.city}, {formData.state}
        </Typography>
        <List disablePadding>
          <ListItem key={1} sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Total de su compra:" />
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              {`${`$` + totalCartPrice()}`}
            </Typography>
          </ListItem>
        </List>
      </>
    </form>
  );
};

export default Review;
