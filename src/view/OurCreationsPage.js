import React from 'react';
import Header from '../elements/Header';
import NavBar from '../elements/NavBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AppFooter from '../elements/AppFooter';
import ProductPage from '../elements/ProductPage';
import ClassicBanner from '../elements/ClassicBanner';


      
const backgroundImage =
  'https://images.unsplash.com/photo-1586581277029-5769487f3881?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


const OurCreationPage = () => (
    <React.Fragment>
    
    {/* <Story /> */}
    <Header
        title="Our Creations"
        sxBackground={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center',
      }} />
    <NavBar />
    <ClassicBanner/>
    <Container maxWidth="lg">
        
      <ProductPage/>
      {/* <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: '250px', mr: 2 }}>
          <CategoryFilter />
        </Box>
        <Box sx={{ flex: 1 }}>
          <ProductGrid />
        </Box>
      </Box> */}
    </Container>
    <AppFooter />
    </React.Fragment>
);

export default OurCreationPage;
