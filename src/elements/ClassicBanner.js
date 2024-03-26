import React from 'react';
import { Box, Typography, Button, Paper, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const StyledBanner = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '500px', // Adjust the height as needed
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  backgroundImage: 'url(/path-to-your/classic-collection-background.jpg)', // Ensure you have a beautiful, relevant background
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    height: 'auto', // Adjust for smaller screens to ensure responsiveness
    padding: theme.spacing(2),
  },
}));

const ClassicBanner = ({ scrollToProductPage }) => {
  const theme = useTheme();

  return (
    <StyledBanner sx={{mt: -5, mb: 10}}>
      <Box  sx={{ maxWidth:800, width: '100%', p: theme.spacing(3), backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: theme.shape.borderRadius }}>
        <Typography variant="h2" component="h1" gutterBottom>
          The Classic
        </Typography>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Discover the timeless elegance of our Classic Collection.
        </Typography>
        <Paper elevation={0} sx={{ p: 2, mb: 2, backgroundColor: 'transparent'}}>
          <Typography variant="body1" color="text.secondary">
          Crafted from superior bamboo, the PANBOO® Classic series features sophisticated colors and adaptable designs for decking, perfectly catering to your aesthetic and practical requirements.
          </Typography>
        </Paper>
        <Button onClick={scrollToProductPage} variant="contained" size="large" sx={{ py: theme.spacing(1), px: theme.spacing(3) }}>
          Shop Now
        </Button>
      </Box>
    </StyledBanner>
  );
};

export default ClassicBanner;
