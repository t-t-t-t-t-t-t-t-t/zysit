import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
const basename = import.meta.env.MODE === 'development' ? '/' : '/zysit';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={basename}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

