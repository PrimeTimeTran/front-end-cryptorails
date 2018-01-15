import React from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import APICable from './api/api_cable'
import App from './components/app';
import reducers from './reducers';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
  <App apiCable={APICable} />
</Provider>,
document.getElementById('root'));

registerServiceWorker();
