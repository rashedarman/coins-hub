import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: 'Montserrat, sans-serif',
        headings: {
          fontFamily: 'Poppins, sans-serif',
        },
      }}
      withNormalizeCSS
      withGlobalStyles
    >
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
