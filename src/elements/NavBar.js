import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Link, Button, Menu, MenuItem } from '@mui/material';

const NavBar = () => {
  const [aboutAnchorEl, setAboutAnchorEl] = useState(null);
  const [productsAnchorEl, setProductsAnchorEl] = useState(null);
  const [innovationAnchorEl, setInnovationAnchorEl] = useState(null);


  const handleAboutClick = (event) => {
    setAboutAnchorEl(event.currentTarget);
  };

  const handleProductsClick = (event) => {
    setProductsAnchorEl(event.currentTarget);
  };


  const handleInnovationClick = (event) => {
    setInnovationAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAboutAnchorEl(null);
    setProductsAnchorEl(null);
    setInnovationAnchorEl(null);
  };

  const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
  };

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: 'rgba(68, 100, 92, 0.1)', }} elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 35, fontFamily: "Stick No Bills" }}
          >
            PANBOO
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>

            <Button
              color="inherit"
              sx={rightLink}
              onClick={handleAboutClick} // Changed to handleAboutClick
            >
              About
            </Button>
            <Menu
              anchorEl={aboutAnchorEl} // Changed to aboutAnchorEl
              keepMounted
              open={Boolean(aboutAnchorEl)} // Changed to check aboutAnchorEl
              onClose={handleClose} 
            >
              <MenuItem onClick={handleClose} component={Link} href="/about-us">
                About Us
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} href="/why-bamboo">
                Sustainability
              </MenuItem>
            </Menu>

            <Button
              color="inherit"
              sx={rightLink}
              onClick={handleProductsClick} // Changed to handleProductsClick
            >
              Solutions
            </Button>
            <Menu
              anchorEl={productsAnchorEl} // Changed to productsAnchorEl
              keepMounted
              open={Boolean(productsAnchorEl)} // Changed to check productsAnchorEl
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} component={Link} href="/products-list">
                Our Creations
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} href="/cases">
                Case Highlights
              </MenuItem>
            </Menu>

            <Button
              color="inherit"
              sx={rightLink}
              onClick={handleInnovationClick} 
            >
              Innovation
            </Button>
            <Menu
              anchorEl={innovationAnchorEl} // Changed to productsAnchorEl
              keepMounted
              open={Boolean(innovationAnchorEl)} // Changed to check productsAnchorEl
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} component={Link} href="/products-list">
                Manufacturing Process
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} href="/cases">
                Why PANBOO®
              </MenuItem>
            </Menu>

            <Button
              color="inherit"
              sx={rightLink}
              component={Link}
              href="/contact-us"
            >
              Contact Us
            </Button>



          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default NavBar;
