import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const roodReducer = combineReducers({
  counter,
  todos,
});

export default roodReducer;
