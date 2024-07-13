import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#f5f5f5', marginTop: 30, py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Info
            </Typography>
            <Link href="#" variant="subtitle1" color="textSecondary">
              About Us
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Resource
            </Typography>
            <Link href="#" variant="subtitle1" color="textSecondary">
              Help Center
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Legal
            </Typography>
            <Link href="#" variant="subtitle1" color="textSecondary">
              Privacy
            </Link>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={5}>
          <Typography variant="body2" color="textSecondary">
            © 2024 PANBOO
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
