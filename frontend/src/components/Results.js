import React from 'react';

// import '../assets/img/lager.jpg';
import { theme } from '../assets/Theme';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Beer from './Beer';

function Results() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h3">
          Our top choices for you!
        </Typography>
        <Beer styleName="lager" image="lager.jpg" />
      </Container>
    </ThemeProvider>
  );
}

export default Results;
