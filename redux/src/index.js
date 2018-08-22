import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import {eventsReducer} from './reducers/eventsReducer';

// STORE CREATE

const store = createStore(eventsReducer);
 store.dispatch({ type: 'TEST_ACTION'}); // czysta akcja -> test

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
