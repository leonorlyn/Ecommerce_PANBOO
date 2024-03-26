import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Typography from '../components/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { GlobalStyles } from '@mui/system';

const globalStyles = (
  <GlobalStyles styles={{
    '@keyframes fadein': {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
  }} />
);

const ProductHeroLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    // height: '80vh',
    minHeight: 900,
    maxHeight: 1000,
  },
}));

const Background = styled('div')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
});

function ProductHeroLayout(props) {
  const { sxBackground, children } = props;

  return (
    <>
    {globalStyles}
    <ProductHeroLayoutRoot>
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
    <Typography
      component="h1"
      sx={{ 
        mt: 6, 
        mb: 0,
        fontWeight: 'bold',
        fontSize: '10rem',
        animation: 'fadein 2s forwards', 
        fontFamily: "Stick No Bills"
      }}
    >
      PANBOO
    </Typography>
        {children}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'common.black',
            opacity: 0.5,
            zIndex: -1,
          }}
        />
        <Background sx={sxBackground} />
      </Container>
    </ProductHeroLayoutRoot>
    </>
  );
}

ProductHeroLayout.propTypes = {
  children: PropTypes.node,
  sxBackground: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default ProductHeroLayout;
