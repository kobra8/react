import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';


// STORE CREATE

const store = createStore(rootReducer);
 store.dispatch({ type: 'TEST_ACTION'}); // czysta akcja -> test

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
