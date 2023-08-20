import React, { useState } from 'react';
import { useFormContext } from '../context/FormContext';
import { TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Check } from '@mui/icons-material';
import Review from './Review';

const AddressForm = () => {
  const { formData, setFormData } = useFormContext();
  const [shouldShowReview, setShouldShowReview] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Nombre"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Apellido"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Dirección"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Ciudad"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Estado/Provincia/Región</InputLabel>
            <Select
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
            >
              <MenuItem value="state1">Estado 1</MenuItem>
              <MenuItem value="state2">Estado 2</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Código Postal"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Número de Teléfono"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            startIcon={<Check />}
          >
            Validar Información
          </Button>
        </Grid>
      </Grid>
      {shouldShowReview && <Review formData={formData} />}
    </form>
  );
};

export default AddressForm;