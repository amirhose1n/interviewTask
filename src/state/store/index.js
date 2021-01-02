import { createStore, combineReducers } from 'redux';
import commentsState from '../comments/reducer';

const store = createStore(
  combineReducers({
    commentsState
  })
);
export default store;
