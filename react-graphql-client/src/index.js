import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from 'graphql-js-client';
import typeBundle from './types';
import '../../shared/app.css';

export const client = new Client(typeBundle, {
  url: 'https://hello-again-saumitra.myshopify.com/api/graphql',
  fetcherOptions: {
    headers: {
      'X-Shopify-Storefront-Access-Token': '64376fe3df39d2b6dd6aec5aa0781ed0'
    }
  }
});

ReactDOM.render(
  <App client={client}/>,
  document.getElementById('root')
);
