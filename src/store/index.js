import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import momentsReducer from './reducer/moments.reducer';
import thunk from 'redux-thunk';

const middlewares = [thunk, logger];

const rootReducer = combineReducers({
	moments: momentsReducer,
});

export default createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middlewares))
);
