import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* importing createStore */
import { Provider } from 'react-redux'; /* imported to avoid passing store as a prop allows us access to the store regardless of where it is in the component tree */
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

const store = createStore(shoppingListItemReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); /* passing reducer to our store and connect redux dev tools  */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
