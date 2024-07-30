import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.jpeg';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.png';
import card5 from '../assets/card5.jpg';
import styles from './Cards.module.css';

const cardData = [
  { img: card1, title: 'Web and Mobile Application Development' },
  { img: card2, title: 'Flutter Mobile Application Development' },
  { img: card3, title: 'Graphic Design And Video Editing' },
  { img: card4, title: 'Digital And Social Media Marketing' },
  { img: card5, title: 'BlockChain Development' }
];

const Cards = () => {
  return (
    <Container>
      <Typography
        variant="h1"
        sx={{
          textAlign: 'center',
          color: '#006838',
          fontSize: { xs: '35px', sm: '45px', md: '55px' },
          marginBottom: '130px'
        }}
      >
        IT Trainings offering in Jawan Pakistan
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box className={styles.cardBox}>
              <img
                src={card.img}
                alt={card.title}
                className={styles.cardImage}
              />
              <Typography variant="h5" sx={{ paddingTop: '20px' }}>
                {card.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cards;
