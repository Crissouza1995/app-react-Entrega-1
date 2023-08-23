import React from "react";
import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useFormContext } from "../context/FormContext";
import DispatchCheckout from "./DispatchCheckout";
import getStepContent from "./helpers/getStepContent";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { addDoc, getFirestore, collection, Timestamp } from "firebase/firestore";

const steps = ["Dirección de envío", "Chequeo de datos", "Orden generada"];

const CheckOut = () => {

  const [orderId, setOrderId] = useState(null);

  const { formData, setFormData } = useFormContext();

  const [activeStep, setActiveStep] = useState(0);

  const { cart, resetCart, totalCartPrice, amountOfItemsInCart } =
    useCartContext();

  if (amountOfItemsInCart() === 0 && activeStep !== steps.length) {
    return <Navigate to="/" />;
  }
  const handleNext = () => {
    
    if (activeStep === 0) {
      const formIsValid = true;
      if (formIsValid) {
        setActiveStep(activeStep + 1);
      }
    } else if (activeStep === 1) {
      setActiveStep(activeStep + 2);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const order = {
    buyer: {
      name: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phoneNumber,
      adress:formData.address,
      date: Timestamp.fromDate(new Date()),
    },
    items: cart.map((product) => ({
      id: product.id,
      itemsOnCart: cart.length,
      name:product.name,
      quantityItems: product.quantity,
    })),
    itemsOnCart: cart.length,
    total: totalCartPrice(),
  };

  console.log('carrtito en checkout',cart);


  const handleClick = () =>{
    if (orderId === null) { 
      const db = getFirestore();
      const ordersCollection = collection(db, 'orders');
      addDoc(ordersCollection, order).then(({ id }) => {
        console.log(id);
        setOrderId(id); 
      });
    }
  };

  console.log('orderIdUsuario',orderId)
  console.log("Datos de user en checkOUT", { ...formData });

  return (
    <div>
      <Container
        component="main"
        maxWidth="sm"
        className="animate__animated animate__fadeIn"
      >
        <Paper
          sx={{ mt: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          elevation={12}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>

          <Stepper
            activeStep={activeStep}
            sx={{ pt: 3, pb: 5, display: { xs: "none", sm: "flex" } }}
          >
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <> {handleClick()}
                <DispatchCheckout
                  cart={cart}
                  resetCart={resetCart}
                  totalCartPrice={totalCartPrice}
                  handleClick={handleClick}
                   orderId = { orderId }
                />
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button onClick={() => {}} sx={{ mt: 3, ml: 1 }} href="/" variant="contained">
                    Seguir Comprando
                  </Button>
                </Box>
              </>
            ) : (
              <>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Volver
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1
                      ? "Revisar y Finalizar"
                      : "Siguiente"}
                  </Button>
                </Box>
              </>
            )}
          </>
        </Paper>
      </Container>
    </div>
  );
};

export default CheckOut;
