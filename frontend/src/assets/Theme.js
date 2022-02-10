import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fcfcfc',
    },
    secondary: {
      main: '#31c6a9',
    },
    hover: {
      main: '#ebe9e9',
    },
  },
});

export const CLR_PRIMARY_1 = '#fcfcfc';
export const CLR_PRIMARY_2 = '#31c6a9';
export const CLR_PRIMARY_3 = '#5bd2b6';
export const CLR_PRIMARY_4 = '#85dfc4';
export const CLR_PRIMARY_5 = '#afecd2';
export const CLR_DEFAULT_GREY = '#ebe9e9';

export const btnStyle = {
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
