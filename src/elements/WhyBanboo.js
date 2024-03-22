import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Grid, Box } from '@mui/material';
import FadeInComponent from '../function/FadeInComponent';
import HoverEffectImage from '../function/HoverEffectImage';

const WhyBambooRoot = styled('section')(({ theme }) => ({
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

const WhyBamboo = () => {
    const imageUrl1 = "whybamboo1.jpg"; 
    const imageUrl2 = "https://images.unsplash.com/photo-1698139997949-cabc360cd5d6?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const imageUrl3 = "whybamboo3.png"; 



  return (
    <WhyBambooRoot>
      <FadeInComponent>

    <Box sx={{ textAlign: 'center', mb: 15, position: 'relative', p: 2 }}>
    <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 'bold', fontSize: '2.5rem' }}>
        From Nature to Your Home: The Bamboo Advantage
    </Typography>
    <Box sx={{ position: 'absolute', bottom: '-5px', left: '50%', transform: 'translateX(-50%)', width: '40%', height: '5px', bgcolor: 'secondary.main', '&:after': { content: '""', display: 'block', width: '100%', height: '100%', background: `url('wave-pattern.png') repeat-x`, backgroundSize: 'contain' } }}></Box>
    {/* <Box sx={{ position: 'absolute', bottom: '-15px', left: '50%', transform: 'translateX(-50%)', width: '60%', height: '5px', bgcolor: 'secondary.main', '&:after': { content: '""', display: 'block', width: '100%', height: '100%',  backgroundSize: 'contain' } }}></Box> */}
    </Box>


        <Grid container spacing={4} alignItems="center" sx = {{mb:20}}>
            <Grid item xs={12} sm={7}>
                <HoverEffectImage imageUrl={imageUrl3} />
            </Grid>
            <Grid item xs={12} sm={5}>
            <Typography variant="h4" sx={{ mb: 2, color: 'primary.main'}}>
            Natural Beauty
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify',}}>
            The unique aesthetic appeal of bamboo lies in its natural texture and warmth, offering a wide range of colors and styles to fit various design preferences. Whether incorporated into modern or traditional decor, bamboo adds a touch of tranquility and refreshment to any space. Its versatility allows for creative expressions in flooring, furniture, and architectural details, making bamboo a favorite among designers seeking to blend functionality with natural beauty.
            </Typography>
            </Grid>
        </Grid>

        <Grid container spacing={4} alignItems="center" sx={{mb: 20 }}>
            <Grid item xs={12} sm={5}>
            <Typography variant="h4" sx={{ mb: 2, color: 'primary.main'}}>
                Eco-Innovative
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
                Bamboo's reputation as the fastest-growing plant on Earth is well-documented, with some species capable of growing up to 35 inches within a single day. This rapid growth cycle, coupled with bamboo's ability to thrive in diverse climates and soil types, makes it a renewable resource par excellence. Additionally, bamboo forests have a higher carbon dioxide absorption rate than many other plants, contributing significantly to the reduction of atmospheric CO2 levels. Choosing bamboo helps in combating deforestation, supporting biodiversity, and promoting a more sustainable interaction with our environment.
            </Typography>
            </Grid>
            <Grid item xs={12} sm={7} display="flex" justifyContent="flex-end">
            <HoverEffectImage imageUrl={imageUrl2} />
            </Grid>
        </Grid>

        <Grid container spacing={4} alignItems="center" sx = {{mb:20}}>
            <Grid item xs={12} sm={7} >
            <HoverEffectImage imageUrl={imageUrl1} />
            </Grid>
            <Grid item xs={12} sm={5}>
            <Typography variant="h4" sx={{ mb: 2, color: 'primary.main'}}>
            Durability and Stability
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify',}}>
            Bamboo outperforms most other woods in tensile strength, making it an incredibly sturdy material for both indoor and outdoor applications. Its resistance to moisture and termites further enhances its appeal, ensuring that bamboo-based products are more resilient against rotting and warping. Properly treated bamboo can last for decades, maintaining its integrity even under harsh environmental conditions. This longevity and minimal maintenance requirement make bamboo not only a practical but also an economical choice.
            </Typography>
            </Grid>
        </Grid>
      </FadeInComponent>
    </WhyBambooRoot>
  );
};

export default WhyBamboo;
