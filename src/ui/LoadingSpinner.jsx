import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CoffeLoading from '../assets/CoffeLoading';

const LoadingSpinner = ({ text = 'Cargando...' }) => (
  <Box display='flex' flexDirection='column' alignItems='center' mt={10}>
    <CoffeLoading></CoffeLoading>
    <Typography variant='overline'>{text}</Typography>
  </Box>
);

export default LoadingSpinner;
