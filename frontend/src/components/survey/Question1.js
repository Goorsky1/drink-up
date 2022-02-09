import React, { useState } from 'react';
import { theme } from '../../assets/Theme';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { CLR_PRIMARY_1, CLR_PRIMARY_2 } from '../../assets/Constants';

import Button from '@mui/material/Button';

function Question1() {
  const [question, setQuestion] = useState(1);

  const btnStyle = {
    borderRadius: '1rem',
    backgroundColor: CLR_PRIMARY_1,
    display: 'inline-block',
    color: CLR_PRIMARY_2,
    cursor: 'pointer',
    padding: '0.25rem 0.75rem',
    borderColor: 'transparent',
    textTransform: 'capitalize',
    fontSize: '1.25rem',
    marginTop: '2rem',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
    transition: 'all 0.225s linear',
  };

  const handleClick = () => {
    setQuestion(question + 1);
    console.log(question);
  };

  return (
    <ThemeProvider theme={theme}>
      {question === 1 && (
        <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h3">
            What color of beer do you choose?
          </Typography>
          <Button style={btnStyle} answer="Dark (brown)" onClick={handleClick}>
            Dark (brown)
          </Button>
          <Button style={btnStyle} answer="Dark (black)" onClick={handleClick}>
            Dark (black)
          </Button>
          <Button
            style={btnStyle}
            answer="Light (yellowish)"
            onClick={handleClick}
          >
            Light (yellowish)
          </Button>
          <Button
            style={btnStyle}
            answer="Light (brownish)"
            onClick={handleClick}
          >
            Light (brownish)
          </Button>
          <Button style={btnStyle} answer="Red" onClick={handleClick}>
            Red
          </Button>
          <Button style={btnStyle} answer="Fancy color" onClick={handleClick}>
            Fancy color
          </Button>
          <Button
            style={btnStyle}
            answer="Doesn't matter"
            onClick={handleClick}
          >
            Doesn't matter
          </Button>
        </Container>
      )}
      {question === 2 && (
        <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h3">
            How strong should it be?
          </Typography>
          <Button style={btnStyle} answer="0%" onClick={handleClick}>
            0%
          </Button>
          <Button style={btnStyle} answer="0.5% - 2.5%" onClick={handleClick}>
            0.5% - 2.5%
          </Button>
          <Button style={btnStyle} answer="3% - 5%" onClick={handleClick}>
            3% - 5%
          </Button>
          <Button style={btnStyle} answer="5.5% - 7.5%" onClick={handleClick}>
            5.5% - 7.5%
          </Button>
          <Button style={btnStyle} answer="8% - 10%" onClick={handleClick}>
            8% - 10%
          </Button>
          <Button style={btnStyle} answer=">10%" onClick={handleClick}>
            &gt;10%
          </Button>
          <Button
            style={btnStyle}
            answer="Doesn't matter"
            onClick={handleClick}
          >
            Doesn't matter
          </Button>
        </Container>
      )}
      {question === 3 && (
        <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h3">
            What country should it be from?
          </Typography>
          <Button style={btnStyle} answer="Belgium" onClick={handleClick}>
            Belgium
          </Button>
          <Button
            style={btnStyle}
            answer="Czech Republic"
            onClick={handleClick}
          >
            Czech Republic
          </Button>
          <Button style={btnStyle} answer="Germany" onClick={handleClick}>
            Germany
          </Button>
          <Button
            style={btnStyle}
            answer="United Kingdom"
            onClick={handleClick}
          >
            United Kingdom
          </Button>
          <Button style={btnStyle} answer="United States" onClick={handleClick}>
            United States
          </Button>
          <Button
            style={btnStyle}
            answer="Rest of the world"
            onClick={handleClick}
          >
            Rest of the world
          </Button>
          <Button
            style={btnStyle}
            answer="Doesn't matter"
            onClick={handleClick}
          >
            Doesn't matter
          </Button>
        </Container>
      )}
      {question === 4 && (
        <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h3">
            How should it taste?
          </Typography>
          <Button style={btnStyle} answer="Bitter" onClick={handleClick}>
            Bitter
          </Button>
          <Button style={btnStyle} answer="Sour" onClick={handleClick}>
            Sour
          </Button>
          <Button style={btnStyle} answer="Sweet" onClick={handleClick}>
            Sweet
          </Button>
          <Button style={btnStyle} answer="Fruity" onClick={handleClick}>
            Fruity
          </Button>
          <Button style={btnStyle} answer="Seasoning" onClick={handleClick}>
            Seasoning
          </Button>
          <Button style={btnStyle} answer="Chocolate" onClick={handleClick}>
            Chocolate
          </Button>
          <Button style={btnStyle} answer="Coffee" onClick={handleClick}>
            Coffee
          </Button>
          <Button
            style={btnStyle}
            answer="Doesn't matter"
            onClick={handleClick}
          >
            Doesn't matter
          </Button>
        </Container>
      )}
      {question === 5 && (
        <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h3">
            Now pick a scent
          </Typography>
          <Button style={btnStyle} answer="Bitter" onClick={handleClick}>
            Bitter
          </Button>
          <Button style={btnStyle} answer="Sour" onClick={handleClick}>
            Sour
          </Button>
          <Button style={btnStyle} answer="Sweet" onClick={handleClick}>
            Sweet
          </Button>
          <Button style={btnStyle} answer="Fruity" onClick={handleClick}>
            Fruity
          </Button>
          <Button style={btnStyle} answer="Seasoning" onClick={handleClick}>
            Seasoning
          </Button>
          <Button style={btnStyle} answer="Chocolate" onClick={handleClick}>
            Chocolate
          </Button>
          <Button style={btnStyle} answer="Coffee" onClick={handleClick}>
            Coffee
          </Button>
          <Button
            style={btnStyle}
            answer="Doesn't matter"
            onClick={handleClick}
          >
            Doesn't matter
          </Button>
        </Container>
      )}
    </ThemeProvider>
  );
}

export default Question1;
