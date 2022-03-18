import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Settings } from './consts';
import {offers} from './mocks/offers';

ReactDOM.render(
  <React.StrictMode>
    <App
      rentObjectsNumber = {Settings.RENT_OBJECT_NUMBER}
      offers = {offers}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
