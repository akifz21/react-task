import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)} >
    <ScrollToTop />
    <App />
  </BrowserRouter>
);

