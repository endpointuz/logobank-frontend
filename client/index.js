import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import moment from 'moment';

/* Favicons */
import './assets/img/favicons/android-chrome-192x192.png';
import './assets/img/favicons/android-chrome-512x512.png';
import './assets/img/favicons/apple-touch-icon.png';
import './assets/img/favicons/favicon-16x16.png';
import './assets/img/favicons/favicon-32x32.png';
import './assets/img/favicons/mstile-150x150.png';
import './assets/img/favicons/safari-pinned-tab.svg';
import './assets/img/favicons/favicon.ico';

import '@babel/polyfill';

import './assets/scss/index.scss';

import routes from '../utils/routes.js';
import createStore from '../utils/createStore';
import { ScrollToTop } from './components/util';

moment.locale('ru');

const store = createStore(window.STORE_DATA, window);

const jsx = (
  <Provider store={store}>
    <Router>
      <ScrollToTop>
        {renderRoutes(routes)}
      </ScrollToTop>
    </Router>
  </Provider>
);


ReactDOM.hydrate(jsx, document.getElementById('app'));
