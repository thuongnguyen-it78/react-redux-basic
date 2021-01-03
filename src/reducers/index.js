
// reducers/index.js (ROOT)
import { combineReducers } from 'redux';
import hobbyReducer from './hobby'

const rootReducer = combineReducers({
    hobby: hobbyReducer,
    })
export default rootReducer;