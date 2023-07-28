
import Grid from '@mui/material/Grid';
import Item from './Item';

/*
  {products.map((item) => (
  <Grid item xs={12} sm={6} lg={3} key={item.id}>
    <Item {...item} />
  </Grid>
))}
*/


const ItemList = ({ products }) => (
  <div>
    
    <Grid container spacing={6} py={6}>
      {products.map((item) => (
        <Grid item xs={12} sm={6} lg={3} key={item.id}>
          <Item {...item} />
        </Grid>
      ))}
    </Grid>
 </div>
);

export default ItemList;