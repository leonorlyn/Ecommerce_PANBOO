import React from 'react';
import Header from '../elements/Header';
import NavBar from '../elements/NavBar';
import Container from '@mui/material/Container';
import AppFooter from '../elements/AppFooter';
import CaseSlider from '../elements/CaseSlider';
import Banner from '../components/Banner';
import CaseData from '../data/case_data.json';


      
const backgroundImage =
  'https://images.unsplash.com/photo-1586581277029-5769487f3881?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


const OurWorkPage = () => {

    return(
        <React.Fragment>
            <Header
                title="Featured Projects"
                sxBackground={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: 'center',
            }} />
            <NavBar />
            <Banner 
            backgroundImage="https://images.unsplash.com/photo-1629976828074-c248d94c82ea?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Decking"
            description="This is a description."
            />

            <Container maxWidth="lg">
            <div>
                <CaseSlider slides={CaseData} />
            </div>
            </Container>
            <AppFooter />
        </React.Fragment>
    );
};

export default OurWorkPage;
