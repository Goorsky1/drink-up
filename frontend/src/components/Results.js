import React from 'react';

import { theme } from '../assets/Theme';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useLocation } from 'react-router-dom';

function Results() {
  const { state } = useLocation();
  const encodedUrl =
    'https://www.google.com/search?q=' +
    encodeURIComponent(state.beer) +
    '%20beer';
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5">
          Our top choice for you:
        </Typography>
        <Typography component="h1" variant="h3" margin-top="5rem">
          {state.beer}
        </Typography>
        <Typography component="h1" variant="h6" margin-top="5rem">
          <Link target="_blank" href={encodedUrl} variant="body2">
            {'Find it on Google!'}
          </Link>
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default Results;
