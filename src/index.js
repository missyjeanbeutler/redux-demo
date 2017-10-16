import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import { Provider } from 'react-redux'; // This is what is connecting our application to the redux store. You should only have one and it should have a prop called store that takes in the redux store.
import store from './store';

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, 
document.getElementById('root'));
