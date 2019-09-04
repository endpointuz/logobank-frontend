import express from 'express';
import { matchRoutes } from 'react-router-config';
import bodyParser from 'body-parser';
import moment from 'moment';
import cors from 'cors';
import sm from 'sitemap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faTimes,
  faChevronDown,
  faChevronUp,
  faCheck,
  faHome,
  faHistory,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import '@babel/polyfill';
import renderer from './renderer';
import createStore from '../utils/createStore';
import routes from '../utils/routes';

moment.locale('ru');

library.add(
  faFacebookF,
  faInstagram,
  faTelegramPlane,
  faBars,
  faTimes,
  faChevronDown,
  faChevronUp,
  faCheck,
  faHome,
  faHistory,
  faPhone,
  faEnvelope,
  faTimesCircle,
);

const app = express();

app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

const sitemap = sm.createSitemap({
  hostname: 'https://logobank.uz',
  cacheTime: 600000,
  urls: [
    { url: '/', changefreq: 'monthly', priority: 1.0 },
  ],
});

app.get('/sitemap.xml', (req, res) => {
  res.header('Content-Type', 'application/xml');
  res.send(sitemap.toString());
});

app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send('User-agent: *\nAllow: /');
});

app.get('*', (req, res) => {
  const store = createStore({});
  const promises = matchRoutes(routes, req.path).map(
    ({ route, match }) => (route.loadData ? route.loadData(store, match, req.get('cookie') || {}, req.query) : null),
  );

  Promise.all(promises).then(() => {
    const result = renderer(req, store);
    const { context } = result;
    if (context && context.status !== undefined) {
      // res.status(context.status);
      res.writeHead(200, { 'Content-Type': 'text/html' });
    }
    res.send(result.jsx);
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listenting to port 3000');
});
