import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReduxStore from './redux/store/ReduxStore';
import { Provider } from 'react-redux'

const store = ReduxStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
