import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import sir from '../assets/sir.jpg';

const StyledImg = styled('img')({
  borderRadius: '50%',
  marginBottom: '50px',
});

const Sir = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 4px -4px rgba(0, 0, 0, 0.2)', marginBottom: '200px' }}>
      <StyledImg src={sir} alt="Muhammad Ali Mughal" width={210} />
      <Typography variant="h1" sx={{ color: '#006838', fontWeight: 'bold', marginBottom: '10px', fontSize: { xs: '30px', sm: '40px', md: '50px' } }}>
        MUHAMMAD ALI MUGHAL
      </Typography>
      <Typography sx={{ color: '#A6B3C4', paddingBottom: '10px' }}>
        Founder of Jawan Pakistan
      </Typography>
      <svg width={35} style={{color:'#CBD5E0', marginTop:'10px'}} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <Container>
        <Box sx={{ width: { xs: '100%', sm: '80%', md: '55%' }, margin: '0 auto', paddingBottom: '100px' }}>
          <Typography sx={{ color: '#718096', paddingTop: '40px', fontSize: '18px' }}>
            We aim to be most efficient provider of business process outsourcing services by setting the industry standards for cost and quality of services. Our long term success will be driven by our relentless focus on recruiting and developing the most talented pool of human capital in our industry.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Sir;
