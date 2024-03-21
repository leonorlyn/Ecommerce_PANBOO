import React from 'react';
import { Container } from '@mui/material';
import Story from '../elements/Story';
import WhyUs from '../elements/废弃';
import OurStories from '../elements/OurStories';
import Header from '../elements/Header';
import NavBar from '../elements/NavBar';


      
const backgroundImage =
  'https://images.unsplash.com/photo-1586581277029-5769487f3881?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


const AboutUs = () => (
    <React.Fragment>
    
    {/* <Story /> */}
    <Header
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }} />
    <NavBar />
    <OurStories />
    {/* <WhyUs /> */}
    </React.Fragment>
);

export default AboutUs;
