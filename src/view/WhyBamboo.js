import React from 'react';
import WhyBamboo from '../elements/WhyBanboo';
import Header from '../elements/Header';
import NavBar from '../elements/NavBar';

      
const backgroundImage =
  'https://images.unsplash.com/photo-1586581277029-5769487f3881?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


const WhyBambooPage = () => (
    <React.Fragment>
    
    {/* <Story /> */}
    <Header
        title="Bamboo Sustainability"
        sxBackground={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center',
      }} />
    <NavBar />
    <WhyBamboo />
    </React.Fragment>
);

export default WhyBambooPage;
