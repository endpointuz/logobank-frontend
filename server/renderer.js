import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import '@babel/polyfill';
import routes from '../utils/routes.js';
import { ScrollToTop } from '../client/components/util';

const renderer = (req, store) => {
  const context = {};
  const state = store.getState();

  const content = renderToString(
    <Provider store={store}>
      <Router context={context} location={{ pathname: req.path, state: { url: `${req.protocol}://${req.get('host')}${req.originalUrl}` } }} query={req.query}>
        <ScrollToTop>
          {renderRoutes(routes)}
        </ScrollToTop>
      </Router>
    </Provider>,
  );

  const helmet = Helmet.renderStatic();

  const jsx = `
      <!DOCTYPE html>
      <html xmlns="w3.org/1999/xhtml">
      <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
          <meta http-equiv="content-language" content="ru" />
 
          <link rel="stylesheet" href="/main.css" />
      </head>

      <body>
          <div class="loader">
            <div class="loader-circle"></div>
          </div>
          <div id="app">${content}</div>
          <script>
            window.STORE_DATA = ${JSON.stringify(state).replace('<script>', '')}
          </script>
          <script src="/vendors.js"></script>
          <script src="/runtime.js"></script>
          <script src="/main.js"></script>
      </body>
      </html>
  `;

  return { jsx, context };
};

export default renderer;
