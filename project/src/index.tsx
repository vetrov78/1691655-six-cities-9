import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Settings } from './consts';
import {OFFERS} from './mocks/offers';

ReactDOM.render(
  <React.StrictMode>
    <App
      rentObjectsNumber = {Settings.RENT_OBJECT_NUMBER}
      offers = {OFFERS}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
