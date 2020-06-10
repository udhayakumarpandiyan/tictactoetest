import { combineReducers } from 'redux'
import languageReducer from './language';
import authenticationReducer from './authentication';

const rootReducer = combineReducers({
    languageReducer, authenticationReducer
})

export default rootReducer;
