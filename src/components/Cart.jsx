import { Fragment } from 'react';

import { Link } from 'react-router-dom';

import CartItem from './CartItem';
import EmptyCart from './EmptyCart';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import { useCartContext } from '../context/CartContext';


const Cart = (cartAddDisplay) => {
  const { amountOfItemsInCart, totalCartPrice, cart, removeItemFromCart } = useCartContext();

  console.log("se renderizo cart");
  console.log("cart en cart", cart);


  return (
    <>
      <h2>{`Mi carrito (${amountOfItemsInCart()})`}</h2>
      <hr />
      <br />
      {cart.length > 0 ? (
        <>
          <Container className='animate__animated animate__fadeIn'>
            {cart.map((item) => (
              <Fragment key={item.id}>
                <CartItem {...item} removeItemFromCart={removeItemFromCart} />
                <Divider variant='middle' sx={{ my: 3 }} />
              </Fragment>
            ))}
          </Container>

          <Typography
            variant='h6'
            align='right'
            className='animate__animated animate__fadeInUp'
          >
            Total: {'$' + totalCartPrice().toFixed(2)}
          </Typography>


          <Link to="/CheckOut" className="Nav-title">

          <Box display='flex' gap justifyContent={'center'} my>
            <Button
              variant='contained'
              color='error'
              component={Link}
              to='/checkOut'
              startIcon={<PointOfSaleIcon />}
            >
              Proceder al pago
            </Button>
          </Box>
                 

                </Link>

       

        </>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;


   

