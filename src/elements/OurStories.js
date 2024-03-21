import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Grid } from '@mui/material';
import FadeInComponent from '../function/FadeInComponent';

const OurStoriesRoot = styled('section')(({ theme }) => ({
  color: theme.palette.text.primary,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column', 
  textAlign: 'justify',
  padding: theme.spacing(10), // Add some padding around
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row', // Arrange side by side on larger screens
    minHeight: 900,
    maxHeight: 1500,
  },
}));

const OurStories = () => {
  const imageUrl = "AboutUsImg.jpeg"; // Replace with your image URL

  return (
    <OurStoriesRoot>
      <FadeInComponent>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6}>
          <div
            style={{
              width: '80%',
              height: '700px',
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              transition: 'filter 0.5s ease',
              '&:hover': {
                filter: 'sepia(15%)',
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h2" sx={{ color: 'primary.main'}}>
            Our Story
          </Typography>
          <Typography variant="h5" sx={{ mb: 6, mt: 3, color: 'primary.main', fontWeight: 'bold'}}>
            "Empower Bamboo with New Value"
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
          PANBOO® starts a business in bamboo outdoor products in 2012. The factory and offices are located in Fujian Province of China, owning over 100 employee. Up to now, PANBOO® has entered into partnerships with organisations such as the Chinese government, contractors and designers. Our mission is to revolutionize building industry by inventing new applications and solutions that can be made with bamboo.
          </Typography>
          <Typography variant="body1">
          Liancheng Zhujiang New Materials Co., Ltd develops and creates bamboo products for outdoor applications that meet the highest technical requirements and quality standards. Our products are made from the moso bamboo(Phyllostachys edulis), a rapidly renewable resource that not only grows incredibly fast but also has many superior characteristics to hardwood.
          </Typography>
        </Grid>
      </Grid>
      </FadeInComponent>
    </OurStoriesRoot>
  );
};

export default OurStories;
