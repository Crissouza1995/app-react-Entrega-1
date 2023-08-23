import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingBuy = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
      <CircularProgress />
    </div>
  );
};

export default LoadingBuy;