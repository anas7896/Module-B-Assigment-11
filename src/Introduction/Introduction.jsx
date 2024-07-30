import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import intro from '../assets/intro.png';

const Introduction = () => {
  return (
    <Container sx={{ paddingTop: '100px', paddingLeft: { xs: '20px', sm: '40px', md: '0px' }, paddingRight: { xs: '20px', sm: '40px', md: '80px' } }}>
      <Typography variant="h4" sx={{ color: '#006838', fontSize: { xs: '24px', sm: '30px', md: '37px' }, lineHeight: '55px', fontWeight: 'bolder', paddingBottom: '0px' }}>
        Introduction to <br />
        Jawan Pakistan
      </Typography>
      <Grid container spacing={0} alignItems="center">
        <Grid item xs={12} md={7}>
          <Typography variant="body1" sx={{ color: '#78869B', lineHeight: '25px', fontSize: { xs: '14px', sm: '16px', md: '16px' } }}>
            The foundation of every state is the education and skills set of its youth. Jawan Pakistan is
            such an organization of Pakistan who is not only working on youth education but also
            enhancing skills set in youth either Free of cost or in a very low cost. This initiative,
            initially developed by a single person and with almost no seed capital, promotes
            entrepreneurship and innovation and Sustainable Development Goal, which promotes
            inclusive and sustainable economic growth.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <img
            width="100%"
            src={intro}
            alt="Jawan Pakistan"
            style={{
              position: 'relative',
              marginTop: { xs: '20px', md: '-110px' },
              marginLeft: { xs: '0', md: '80px' },
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Introduction;
