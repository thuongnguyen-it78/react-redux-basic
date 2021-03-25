// reducers/index.js (ROOT)
import { combineReducers } from 'redux';
import hobbyReducer from './hobby';
import todoReducer from './todo';

const rootReducer = combineReducers({
	hobby: hobbyReducer,
	todo: todoReducer,
});
export default rootReducer;
