import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/configureStore';

import './main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
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
    </Provider>
  </React.StrictMode>,
);
