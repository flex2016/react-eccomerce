import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from './root-reducer';

const middlewares = [logger];

const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares))

const store = createStore(rootReducer, composedEnhancer)
;

export default store;
