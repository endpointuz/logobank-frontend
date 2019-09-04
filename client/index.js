import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import moment from 'moment';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faFacebookF, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
// import {
//   faBars,
//   faTimes,
//   faChevronDown,
//   faChevronUp,
//   faCheck,
//   faHome,
//   faHistory,
//   faPhone,
//   faEnvelope,
// } from '@fortawesome/free-solid-svg-icons';

// import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import '@babel/polyfill';

import './assets/scss/index.scss';

import routes from '../utils/routes.js';
import createStore from '../utils/createStore';
import { ScrollToTop } from './components/util';

moment.locale('ru');

// library.add(
//   faFacebookF,
//   faInstagram,
//   faTelegramPlane,
//   faBars,
//   faTimes,
//   faChevronDown,
//   faChevronUp,
//   faCheck,
//   faHome,
//   faHistory,
//   faPhone,
//   faEnvelope,
//   faTimesCircle,
// );

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
