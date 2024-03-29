import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from '../elements/ProductHeroLayout';
import TypewriterEffect from '../function/TypewriterEffect';
import NavBar from '../elements/NavBar';
import WhyPanboo from '../elements/WhyPanboo';
// import Story from '../elements/Story';
import OurWorkGallery from '../elements/OurWorkGallery';
import ContactSection from '../elements/ContactSection';
import AppFooter from '../elements/AppFooter';

const backgroundImage =
  'https://images.unsplash.com/photo-1586581277029-5769487f3881?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function LandingPage() {
  return (
    <React.Fragment>
    
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      <NavBar/>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <TypewriterEffect
      text="Master of Bamboo Outdoor Products"
      speed={100}
      color="inherit"
      align="center"
      variant="h2"
      marked="center" 
      sx={{
        fontStyle: 'italic',
        fontFamily: "'Waiting for the Sunrise', cursive",
      }}
    />
      <Typography color="inherit" align="center" variant="h2" marked="center">
      </Typography>
      {/* <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/about-us"
        sx={{ minWidth: 200, mt: 10}}
      >
        Explore
      </Button> */}
      </ProductHeroLayout>
      <WhyPanboo/>
      <OurWorkGallery />
      <ContactSection />
      <AppFooter />
    {/* <Story /> */}
    </React.Fragment>
  );
}
