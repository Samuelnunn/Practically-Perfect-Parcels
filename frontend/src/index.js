import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './fonts/RIVERFLOWS.ttf'; 
import { restoreCSRF, fetch } from './store/csrf';
import * as sessionActions from './store/session';
import * as reviewActions from './store/reviews';

import configureStore from './store';



const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = fetch;
  window.store = store;
  window.sessionActions = sessionActions;
  window.reviewActions = reviewActions;
}

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
}



function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
);
