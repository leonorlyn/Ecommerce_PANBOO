import React from 'react';
import { Box, Typography, Button, Paper, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const StyledBanner = styled(Box)(({ theme, backgroundImage }) => ({
  position: 'relative',
  height: '300px', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  // 条件判断：如果backgroundImage有值，则使用该图片，否则使用白色背景
  backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none', 
  backgroundColor: backgroundImage ? 'none' : '#fff', // 当没有背景图片时使用白色背景
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    padding: theme.spacing(1),
  },
  '&::before': { 
    content: backgroundImage ? '""' : 'none', // 当没有背景图片时，不创建遮罩层
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    zIndex: 1, 
  },
  '& > *': { 
    position: 'relative',
    zIndex: 2,
  }
}));


const Banner = ({ backgroundImage, subtitle, title, description }) => {
  const theme = useTheme();

  return (
    <StyledBanner sx={{mt: 6, mb: 10}} backgroundImage={backgroundImage}>
      <Box sx={{ maxWidth:800, width: '100%', p: theme.spacing(3), borderRadius: theme.shape.borderRadius }}>
        <Typography variant="h2" component="h1" gutterBottom color='primary.main'>
          {title}
        </Typography>
        <Typography variant="h5" sx={{ mb: 2 }}>
          {subtitle}
        </Typography>
        <Paper elevation={0}  sx={{ p: 2, mb: 2, backgroundColor: 'transparent'}}>
          <Typography color='text.secondary' variant="body1">
            {description}
          </Typography>
        </Paper>
      </Box>
    </StyledBanner>
  );
};

export default Banner;
