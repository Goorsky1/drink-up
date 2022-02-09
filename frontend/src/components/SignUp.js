import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../assets/Theme';
import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
} from '../utils/Validators';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
  });

  const [errors, setErrors] = React.useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({
      ...errors,
      email: validateEmail(values.email),
      password: validatePassword(values.password),
      confirmPassword: validateConfirmPassword(
        values.password,
        values.confirmPassword
      ),
    });
    const data = new FormData(e.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword'),
      username: data.get('username'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h3">
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              value={values.email}
              onChange={(e) => {
                setValues({
                  ...values,
                  email: e.target.value,
                });
              }}
              margin="normal"
              variant="standard"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={errors.email}
              helperText={errors.email ? 'Enter a valid email' : ''}
            />
            <TextField
              value={values.username}
              onChange={(e) => {
                setValues({
                  ...values,
                  username: e.target.value,
                });
              }}
              margin="normal"
              variant="standard"
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              value={values.password}
              onChange={(e) => {
                setValues({
                  ...values,
                  password: e.target.value,
                });
              }}
              margin="normal"
              variant="standard"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={errors.password}
              helperText={errors.password ? 'Enter a stronger password' : ''}
            />
            <TextField
              value={values.confirmPassword}
              onChange={(e) => {
                setValues({
                  ...values,
                  confirmPassword: e.target.value,
                });
              }}
              margin="normal"
              variant="standard"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              error={errors.confirmPassword}
              helperText={errors.confirmPassword ? 'Passwords must match' : ''}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item padding="0.5rem">
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => navigate('../login')}
                >
                  {'Already have an account? Sign In'}
                </Link>
              </Grid>
              <Grid item padding="0.5rem">
                <Link
                  gref="#"
                  variant="body2"
                  onClick={() => navigate('../home')}
                >
                  {'Or Continue as a guest'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
