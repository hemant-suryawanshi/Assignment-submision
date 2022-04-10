import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbarr from './navbar'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navbarr></Navbarr>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
