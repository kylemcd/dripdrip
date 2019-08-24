import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-146430923-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
