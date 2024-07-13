import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

function ContactSection() {
  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 20, mb:0 }}
    >
      <Button
        sx={{
          border: '4px solid currentColor',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h4" component="span" color='primary.main'>
          Got any questions? Need help?
        </Typography>
      </Button>
      <Typography variant="subtitle1" color= "text.secondary" sx={{ my: 3 }}>
        We are here to help. Get in touch!
      </Typography>
    <ContactSupportIcon sx={{ color: 'secondary.dark', fontSize: 100 }}/>
    </Container>
  );
}

export default ContactSection;
