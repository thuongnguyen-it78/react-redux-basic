
// reducers/index.js (ROOT)
import hobbyReducer from './hobby'

const rootReducer = combineReducers({
    hobby: hobbyReducer,
    })
export default rootReducer;