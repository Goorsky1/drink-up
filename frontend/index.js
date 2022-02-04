import React from 'react';
import ReactDOM from 'react-dom';
import './public/index.css';
import App from './src/App';
import reportWebVitals from './src/reportWebVitals';
import LoginForm from './src/components/LoginForm';
import ExampleQuestion from './src/components/ExampleQuestion';
import Results from './src/components/Results';

ReactDOM.render(
  <React.StrictMode>
    <Results />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
