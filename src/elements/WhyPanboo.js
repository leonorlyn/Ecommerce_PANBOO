import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

import { motion } from 'framer-motion';

// icons
import ScienceIcon from '@mui/icons-material/Science';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import RecyclingIcon from '@mui/icons-material/Recycling';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function WhyPanboo() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', bgcolor: 'common.white' }}
    >
      <Typography variant="h2" marked="center" align="center" component="h2" sx={{ mt: 20, mb: 5,color: 'primary.main'}}>
        Elevate Your Space with PANBOO®
      </Typography>

      <Container sx={{ mt: 10, mb: 30, display: 'flex', position: 'relative' }}>
        <Box/>
        <Grid container spacing={4}>

          <Grid item xs={12} md={3}>
            <Box sx={item}>
            <motion.div whileHover={{ scale: 1.1 }} style={{ position: 'relative', maxWidth: 450, margin: 'auto' }}>
              <ScienceIcon sx={{ color: 'secondary.dark', fontSize: 80 }}/>
            </motion.div>
              <Typography variant="h6" sx={{ my: 5 }}>
                Tech Innovation
              </Typography>
              <Typography variant="h5" sx={{textAlign: 'justify'}}>
              At PANBOO®, we leverage cutting-edge technology not only to enhance product quality but also to champion environmental stewardship. 
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box sx={item}>
            <motion.div whileHover={{ scale: 1.1 }} style={{ position: 'relative', maxWidth: 450, margin: 'auto' }}>
              <PeopleAltIcon sx={{ color: 'secondary.dark', fontSize: 80 }}/>
            </motion.div>
              <Typography variant="h6" sx={{ my: 5 }}>
                Tailored Expertise
              </Typography>
              <Typography variant="h5" sx={{textAlign: 'justify'}}>
              Boasting more than fifteen years at the forefront of bamboo decking innovation and efficiency, 
              PANBOO® prides itself on its ability to customize solutions. 
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box sx={item}>
            <motion.div whileHover={{ scale: 1.1 }} style={{ position: 'relative', maxWidth: 450, margin: 'auto' }}>
              <HealthAndSafetyIcon sx={{ color: 'secondary.dark', fontSize: 80 }}/>
            </motion.div>
              <Typography variant="h6" sx={{ my: 5 }}>
              Health and Safety
              </Typography>
              <Typography variant="h5" sx={{textAlign: 'justify'}}>
              We prioritizes the health of its consumers and employees. Our production process and products are designed to be harmless to humans.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box sx={item}>
            <motion.div whileHover={{ scale: 1.1 }} style={{ position: 'relative', maxWidth: 450, margin: 'auto' }}>
              <RecyclingIcon sx={{ color: 'secondary.dark', fontSize: 80 }}/>
            </motion.div>
              <Typography variant="h6" sx={{ my: 5 }}>
              CO2 Neutral
              </Typography>
              <Typography variant="h5" sx={{textAlign: 'justify'}}>
              We embraces eco-friendly practices by cultivating bamboo without pesticides and repurposing bamboo waste as a renewable energy source. 
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default WhyPanboo;
