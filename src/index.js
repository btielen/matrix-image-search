import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import imageSearchApp from './reducers';
import initState from './initState'

import App from './App';
import './index.css';


const logger = createLogger();

let store = createStore(
    imageSearchApp,
    initState,
    applyMiddleware(thunk ,logger)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
