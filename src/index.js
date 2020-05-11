import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store";
import { Provider } from 'react-redux'

import App from './components/App';

import './styles/index.css';
import * as serviceWorker from './serviceWorker';

const app = (
  <Provider store={ store }>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();