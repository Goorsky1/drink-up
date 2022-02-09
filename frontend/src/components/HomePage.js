import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { theme } from '../assets/Theme';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              navigate('../survey');
            }}
          >
            Beer Picker™
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              navigate('../liked');
            }}
          >
            My Liked Beers
          </Button>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default HomePage;
