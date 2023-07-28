

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = ({id, name, price, img}) => {


  return (
    <Card className='animate__animated animate__fadeIn' raised>
      <CardActionArea>
        <CardMedia
          component='img'
          height='400'
          image={ img }
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
        <Button variant='outlined' size='small' color='primary'>
          Ver detalle
        </Button>
        <Typography variant='subtitle1' color='text.primary' align='right'>
         Price: {`$${price}`}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default Item

