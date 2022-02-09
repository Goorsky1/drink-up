import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { CLR_PRIMARY_1, CLR_PRIMARY_2 } from '../../assets/Constants';

function SurveyButton(props) {
  const [value, setValue] = useState('');

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
  return (
    <>
      <Button
        style={btnStyle}
        // onClick={() => {
        //   setValue(props.answer);
        // }}
      >
        {props.answer}
      </Button>
      {console.log(value)}
    </>
  );
}

export default SurveyButton;
