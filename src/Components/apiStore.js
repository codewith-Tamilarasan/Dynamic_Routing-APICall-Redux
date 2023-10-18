import { createStore, combineReducers } from 'redux';
import Reducer from './apiReducer';

const rootReducer = combineReducers({
  details: Reducer,
});

const store = createStore(rootReducer);

export default store;
