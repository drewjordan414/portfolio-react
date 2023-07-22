import React from 'react';
import ReactDOM from 'react-dom';
import './assets/stylesheet.css'; // import the CSS here if necessary
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals();