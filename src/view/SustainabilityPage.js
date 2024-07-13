import React from 'react';
import WhyBamboo from '../elements/WhyBanboo';
import Header from '../elements/Header';
import NavBar from '../elements/NavBar';
import AppFooter from '../elements/AppFooter';

const backgroundImage =
  'https://images.unsplash.com/photo-1586581277029-5769487f3881?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


const SustainabilityPage = () => (
    <React.Fragment>
    
    {/* <Story /> */}
    <Header
        title="Bamboo Sustainability"
        sxBackground={{
            backgroundImage: `url(${backgroundImage})`,
      }} />
    <NavBar />
    <WhyBamboo />
    <AppFooter />
    </React.Fragment>
);

export default SustainabilityPage;
