import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Beer(props) {
  return (
    <Container component="main" maxWidth="xs">
      <img src={props.image} alt={props.styleName} />
      <Typography component="h1" variant="h5">
        {props.styleName}
      </Typography>
    </Container>
  );
}

export default Beer;
