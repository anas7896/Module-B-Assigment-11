import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import mission from '../assets/mission.png';

const Mission = () => {
  return (
    <Box sx={{ backgroundColor: '#FFFFFF', marginTop: '10px', marginBottom: '100px', paddingTop: '100px', paddingBottom: '100px', boxShadow: '0 -5px 10px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -1px rgba(0, 0, 0, 0.2)', display: 'flex' }}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <img src={mission} alt="Mission" style={{ width: '100%', maxWidth: '500px', marginLeft: '0px'}} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography component="div" sx={{ color: '#77859b', lineHeight: '1.5', fontSize: { xs: '14px', sm: '16px', md: '16px' }, paddingRight: '20px' }}>
              <Typography component="span" sx={{ fontSize: { xs: '24px', sm: '30px', md: '35px' }, fontWeight: 'bolder', color: '#006838', display: 'block' }}>
                Mission And Vision <br />
                Behind Jawan Pakistan
              </Typography>
              <br />
              Our vision is to bring our students into the 21st century through innovation and modern 
              technology. To create a better every day life for every people. This program is not only 
              impacting the youth in monetary perspective but it is also creating some deep-rooted, 
              long-term psychological effects e.g. minimizing frustration among the unemployed 
              youth. 
              <br /> 
              <br />
              Our mission is to provide high quality education that connects young people with 
              opportunities to transform their lives. The educated youngsters who remain unemployed
              gets frustrated, depressed and disheartened when they do not succeed in getting their
              dream jobs. This training reinforces the educated youth to earn well through freelancing,
              develop variety of skills through specified domains and promote entrepreneurial culture 
              that diverts youths potentials for constructive purposes. This energy diversion definitely 
              make the youth more confident, self-reliant and constructive asset for a progressing economy.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Mission;
