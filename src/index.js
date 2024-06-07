import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';

const theme = {
  primaryColor: '#007bff',
  secondaryColor: '#6c757d',
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ThemeProvider dir="rtl" theme={theme}>
          <App />
        </ThemeProvider>
    </React.StrictMode>
);
