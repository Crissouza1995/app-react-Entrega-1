import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Grid } from "@mui/material";



   const ItemDetail = ({id, name, price, img, description}) => {
    console.log('item id:', id)
  
  return (
    
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
    <Grid item>
      <Card align='center' className='animate__animated animate__fadeIn' raised>
        <CardActionArea>
          <CardMedia
            component='img'
            height='400'
            image={img}
            alt={id}
          />
          <CardContent>
            <Typography variant='body1' color='text.secondary' noWrap>
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button variant='outlined' size='small' color='primary'>
            Agregar al carrito
          </Button>
          <Typography variant='subtitle1' color='text.primary' align='right'>
            Price: {`$${price}`}
          </Typography>
        </CardActions>
        <CardContent>
            <Typography variant='body1' color='text.primary' noWrap>
              {description}
            </Typography>
          </CardContent>
      </Card>
    </Grid>
  </Grid>
  );
}


export default ItemDetail;

