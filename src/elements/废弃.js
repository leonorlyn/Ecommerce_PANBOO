import React from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Card, CardContent, CardActions, Button, Typography, Grid, Box } from '@mui/material';
// import withRotate from '../function/WithRotate';

// const RotatingCard = withRotate(Card);

const WhyUsRoot = styled('section')(({ theme }) => ({
  color: theme.palette.text.primary,
  textAlign: 'justify',
  // backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(10),
  [theme.breakpoints.up('sm')]: {
    minHeight: 700,
    maxHeight: 1500,
  },
}));

const reasons = [
  { title: 'Tech Innovation', content: '竹子比大多数木材都要坚固...' },
  { title: 'Healthy & Safety', content: '竹子是世界上增长最快的植物...' },
  { title: 'Expert Knowledge', content: '竹子有着独特的设计美感...' },
  { title: 'CO2 neutral', content: '我们开发了自己的JNZ技术...' },
];

const WhyUs = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, backgroundColor: 'primary.light' }}>
    <WhyUsRoot>
    <Typography variant="h2" sx={{ color: 'common.white', textAlign: 'center', mb: '5%'}}>
      Why PANBOO
    </Typography>
      <Grid container spacing={0} justifyContent="center" sx={{ml:'1%', mr:'1%'}}>
        {reasons.map((reason, index) => (
          <Grid item xs={12} sm={3} key={index}> {/* Adjust grid item size for different screens */}
            <motion.div whileHover={{ scale: 1.1 }} style={{ position: 'relative', maxWidth: 450, margin: 'auto' }}>
            <withRotate>
              <Card sx={{  
                width: '80%', 
                height: 300, 
                position: 'relative', 
                display: 'flex', 
                zIndex: 1, 
                mt:3,
                alignItems: 'center',}}>
              <CardContent sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                textAlign: 'center', 
              }}>
                  <Typography gutterBottom variant="h4" component="div">
                    {reason.title}
                  </Typography>
                </CardContent>
              </Card>
              </withRotate>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </WhyUsRoot>
  </Box>
);

export default WhyUs;
