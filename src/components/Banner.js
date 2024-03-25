import React from 'react';
import { Box, Typography, Button, Paper, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const StyledBanner = styled(Box)(({ theme, backgroundImage }) => ({
  position: 'relative',
  height: '500px', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  backgroundImage: `url(${backgroundImage})`, // 使用props中的背景图片
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    padding: theme.spacing(2),
  },
  '&::before': { // 添加伪元素作为蒙版
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 蒙版颜色和透明度
    zIndex: 1, // 确保蒙版在背景图片之上
  },
  '& > *': { // 确保子元素在蒙版之上
    position: 'relative',
    zIndex: 2,
  }
}));

const Banner = ({ backgroundImage, title, description }) => {
  const theme = useTheme();

  return (
    <StyledBanner sx={{mt: 0, mb: 10}} backgroundImage={backgroundImage}>
      <Box sx={{ maxWidth:800, width: '100%', p: theme.spacing(3), borderRadius: theme.shape.borderRadius }}>
        <Typography variant="h1" component="h1" gutterBottom color='white'>
          {title}
        </Typography>
        <Paper elevation={0}  sx={{ p: 2, mb: 2, backgroundColor: 'transparent'}}>
          <Typography color='white' variant="body1">
            {description}
          </Typography>
        </Paper>
      </Box>
    </StyledBanner>
  );
};

export default Banner;
