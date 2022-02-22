import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  RENT_OBJECT_NUMBER: 6,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      rentObjecsNumber =  {Settings.RENT_OBJECT_NUMBER}
    />
  </React.StrictMode>,
  document.getElementById('root'));
