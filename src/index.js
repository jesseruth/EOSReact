import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {todos, visibilityFilter} from './reducers/reducers';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import { entitiesReducer, queriesReducer, queryMiddleware } from 'redux-query';
import logger from 'redux-logger';

export const getQueries = (state) => state.queries;
export const getEntities = (state) => state.entities;

const combinedReducers = combineReducers({
  visibilityFilter,
  todos,
  entities: entitiesReducer,
  queries: queriesReducer,
});


const store = createStore(
  combinedReducers,
  applyMiddleware(queryMiddleware(getQueries, getEntities), logger)
);


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
