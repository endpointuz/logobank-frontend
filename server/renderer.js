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
          <meta name="robots" content="index,follow" />
          
          <link rel="icon" sizes="16x16" href="/img/favicon-16x16.png">
          <link rel="icon" sizes="32x32" href="/img/favicon-32x32.png">
          <link rel="icon" href="/img/favicon.ico">
          <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#00а0ff" />
          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
          <link rel="icon" sizes="192x192" href="/img/android-chrome-192x192.png">
          <link rel="icon" sizes="512x512" href="/img/android-chrome-512x512.png">
 
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
          <!-- Yandex.Metrika counter -->
          <script type="text/javascript" >
             (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
             m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
             (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          
             ym(56626129, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
             });
          </script>
          <noscript><div><img src="https://mc.yandex.ru/watch/56626129" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
          <!-- /Yandex.Metrika counter -->
      </body>
      </html>
  `;

  return { jsx, context };
};

export default renderer;
