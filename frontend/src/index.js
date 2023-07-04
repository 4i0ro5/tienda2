import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './pantallas/App.js';

const rootElement = document.getElementById('root');

// Reemplaza esto:
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   rootElement
// );

// Por esto:
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
