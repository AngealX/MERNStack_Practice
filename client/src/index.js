import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers }from './reducers';
import App from './App'; //connecting to the "App" file in the folder
import './index.css'; //adding the css


const store = createStore(reducers, compose(applyMiddleware(thunk)))


ReactDOM.render(
        <Provider store = {store}>
            <App />

        </Provider>,
            document.getElementById('root'),
            );//with will be connecting to the div with the id of "root"


