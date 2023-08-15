import { Typography, Box } from '@mui/material';
import React from 'react';

function Home() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="h1" gutterBottom>
        Welcome
      </Typography>
    </Box>
  );
}

export default Home;
