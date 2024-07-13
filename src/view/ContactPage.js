import React from 'react';
import ContactUsForm from '../elements/ContactUsForm';
import { Box, Typography, Grid, Paper } from '@mui/material';
import Header from '../elements/Header';
import NavBar from '../elements/NavBar';
import AppFooter from '../elements/AppFooter';
import { styled } from '@mui/material/styles';
      
const backgroundImage =
  'https://images.unsplash.com/photo-1586581277029-5769487f3881?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


const ContactUsPage = () => (
    <React.Fragment>
    <Header
      title = "Contact Us"
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
      }} />
    <NavBar />
    <Box sx={{ flexGrow: 1, p: 3, mb: 10}}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <ContactDescription />
            </Grid>
            <Grid item xs={12} md={6}>
                <ContactUsForm />
            </Grid>
        </Grid>
    </Box>
    <AppFooter />
    </React.Fragment>
);

const ContactDescription = () => {
    return (
        <Paper sx={{ p: 2,  color: 'primary.main'}}>
            <Typography variant="h2" gutterBottom>
                Contact Us!
            </Typography>
            <Typography variant="body1" paragraph sx={{ mt:10 }}>
                Are you considering PANBOO® for your project and need some samples or expert advice? Our PANBOO® experts are here to help you find the best fit.
            </Typography>
            <Typography variant="body1" paragraph>
                Please fill in the form, and we will get in touch with you ASAP. Or you can get in touch with us with following info.
            </Typography>
            <Typography variant="body1" paragraph sx={{mt:10}}>
                Email: <a href="mailto:panbooglobal@163.com">panbooglobal@163.com</a>
            </Typography>
            <Typography variant="body1" paragraph>
                Tel: +86 18605989335
            </Typography>
        </Paper>
    );
};

export default ContactUsPage;
