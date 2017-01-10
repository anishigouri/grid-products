import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GridProducts from './GridProducts.js';
import {Router,Route, browserHistory, IndexRoute} from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

const store = createStore(
    rootReducer,
    composeWithDevTools (
        applyMiddleware(thunk)
    )
)

ReactDOM.render(
  ( <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} >
                <IndexRoute component={GridProducts} />
                <Route path="/products" component={GridProducts}/>
            </Route>
        </Router>
    </Provider>),
  document.getElementById('root')
);
