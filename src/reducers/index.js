import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { userReducer } from './userReducer';

const rootReducer = (history) => combineReducers({
  initial: 'initial',
  userReducer: userReducer,
  router: connectRouter(history),
});

export default rootReducer;

