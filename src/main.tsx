import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

// Preload fonts
const fonts = [
  'https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed:wght@900&display=swap',
  'https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,500;0,600;1,600&display=swap',
  'https://fonts.googleapis.com/css2?family=Libre+Barcode+39+Text&display=swap'
];

fonts.forEach(font => {
  const link = document.createElement('link');
  link.href = font;
  link.rel = 'stylesheet';
  document.head.appendChild(link);
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)