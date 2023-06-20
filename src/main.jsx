import React from 'react';
import App from './App';
import { Analytics } from '@vercel/analytics/react';
import { hydrate, render } from 'react-dom';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(
    <>
      <App />
      <Analytics />
    </>, rootElement);
} else {
  render(
    <>
      <App />
      <Analytics />
    </>, rootElement);
}
