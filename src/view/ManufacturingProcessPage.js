import React from 'react';
import Header from '../elements/Header';
import NavBar from '../elements/NavBar';
import ManufacturingProcess from '../elements/ManufacturingProcess';
import Banner from '../components/Banner';
import AppFooter from '../elements/AppFooter';

      
const backgroundImage =
  'https://images.unsplash.com/photo-1586581277029-5769487f3881?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


const ManufacturingProcessPage = () => (
    <React.Fragment>
    
    {/* <Story /> */}
    <Header
      title = "Manufacturing Process"
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
      }} />
    <NavBar />
    <Banner 
        title="Crafting Process"
        subtitle="Building a greener future"
        description="Our manufacturing process for bamboo outdoor products encompasses a comprehensive suite of steps designed to produce an item not only tougher and more resilient than hardwood but also an aesthetically pleasing, sustainable alternative to non-renewable resources."
    />
    <ManufacturingProcess />
    <AppFooter />
    </React.Fragment>
);

export default ManufacturingProcessPage;
