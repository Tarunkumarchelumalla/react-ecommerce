import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { theme } from './components/custom/theme';
import { ThemeProvider } from '@mui/material';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
      <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </BrowserRouter>,
 
);

