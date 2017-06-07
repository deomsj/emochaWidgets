// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App.js';

//data
import widgetData from '../data/data';

ReactDOM.render(
  <App widgetData={widgetData} />,
  document.getElementById('app')
);