import React, { useEffect, useState } from 'react';
import { theme, btnStyle } from '../assets/Theme';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { postBeerSurvey } from '../Api/Api';

function Survey() {
  const [question, setQuestion] = useState(1);

  const navigate = useNavigate();

  const [color, setColor] = useState('');
  const [strength, setStrength] = useState('');
  const [country, setCountry] = useState('');
  const [taste, setTaste] = useState('');
  const [scent, setScent] = useState('');
  const [foam, setFoam] = useState('');

  const handleSubmit = async () => {
    setQuestion(question + 1);
    await postBeerSurvey({ color, strength, country, taste, scent, foam });
    navigate('../results');
  };

  const handleClick = (answer) => {
    switch (question) {
      case 1:
        setColor(answer);
        break;
      case 2:
        setStrength(answer);
        break;
      case 3:
        setCountry(answer);
        break;
      case 4:
        setTaste(answer);
        break;
      case 5:
        setScent(answer);
        break;
      case 6:
        setFoam(answer);
        break;
      default:
        break;
    }
    setQuestion(question + 1);
  };

  return (
    <ThemeProvider theme={theme}>
      {question === 1 && (
        <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h3">
            What color of beer do you choose?
          </Typography>
          <Button style={btnStyle} onClick={() => handleClick('darkBrown')}>
            Dark (brown)
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('darkBlack')}>
            Dark (black)
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('lightYellow')}>
            Light (yellow)
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('lightBrown')}>
            Light (brown)
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('red')}>
            Red
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('fancy')}>
            Fancy color
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('none')}>
            Doesn't matter
          </Button>
        </Container>
      )}
      {question === 2 && (
        <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h3">
            How strong should it be?
          </Typography>
          <Button style={btnStyle} onClick={() => handleClick('0')}>
            0%
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('3')}>
            0.5% - 3%
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('5')}>
            3% - 5%
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('7')}>
            5.5% - 7%
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('10')}>
            8% - 10%
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('11')}>
            &gt;10%
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('none')}>
            Doesn't matter
          </Button>
        </Container>
      )}
      {question === 3 && (
        <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h3">
            What country should it be from?
          </Typography>
          <Button style={btnStyle} onClick={() => handleClick('belgium')}>
            Belgium
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('czech')}>
            Czech Republic
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('germany')}>
            Germany
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('uk')}>
            United Kingdom
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('us')}>
            United States
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('rest')}>
            Rest of the world
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('none')}>
            Doesn't matter
          </Button>
        </Container>
      )}
      {question === 4 && (
        <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h3">
            How should it taste?
          </Typography>
          <Button style={btnStyle} onClick={() => handleClick('bitter')}>
            Bitter
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('sour')}>
            Sour
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('sweet')}>
            Sweet
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('fruity')}>
            Fruity
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('seasoning')}>
            Seasoning
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('chocolate')}>
            Chocolate
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('coffee')}>
            Coffee
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('none')}>
            Doesn't matter
          </Button>
        </Container>
      )}
      {question === 5 && (
        <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h3">
            Now pick a scent
          </Typography>
          <Button style={btnStyle} onClick={() => handleClick('malt')}>
            Malt
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('caramel')}>
            Caramel
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('roasted')}>
            Roasted malt
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('citrus')}>
            Citrus fruits
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('herbs')}>
            Herbs/Flowers
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('chocolate')}>
            Chocolate
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('coffee')}>
            Coffee
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('none')}>
            Doesn't matter
          </Button>
        </Container>
      )}
      {question === 6 && (
        <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h3">
            How much foam should there be?
          </Typography>
          <Button style={btnStyle} onClick={() => handleClick('plenty')}>
            Plenty
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('little')}>
            Just a little
          </Button>
          <Button style={btnStyle} onClick={() => handleClick('none')}>
            Doesn't matter
          </Button>
        </Container>
      )}
      {question === 7 && (
        <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h3">
            Submit the answers or take the survey again
          </Typography>
          <Button style={btnStyle} onClick={() => setQuestion(1)}>
            Go Back
          </Button>
          <Button style={btnStyle} onClick={handleSubmit}>
            Submit
          </Button>
        </Container>
      )}
    </ThemeProvider>
  );
}

export default Survey;
