import React from 'react';
// connects our react application to the index.html file found in the public folder
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
import store from './app/store';
import App from './components/App';
import ToggleColorModeProvider from './utils/ToggleColorMode';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ToggleColorModeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleColorModeProvider>
  </Provider>,
);
