import React, { useRef } from 'react';
import Header from '../elements/Header';
import NavBar from '../elements/NavBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AppFooter from '../elements/AppFooter';
import ProductPage from '../elements/ProductPage';
import ClassicBanner from '../elements/ClassicBanner';


      
const backgroundImage =
  'https://images.unsplash.com/photo-1586581277029-5769487f3881?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


const OurCreationPage = () => {
    const productPageRef = useRef(null);

    const scrollToProductPage = () => {
        productPageRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <React.Fragment>
            <Header
                title="Our Creations"
                sxBackground={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: 'center',
            }} />
            <NavBar />
            <ClassicBanner scrollToProductPage={scrollToProductPage} />
            <Container maxWidth="lg" ref={productPageRef}>       
            <ProductPage/>
            </Container>
            <AppFooter />
        </React.Fragment>
    );
};

export default OurCreationPage;
