import { combineReducers } from 'redux'
import languageReducer from './language';
import authenticationReducer from './authentication';
import productReducer from './product';

const rootReducer = combineReducers({
    languageReducer, authenticationReducer, productReducer
})

export default rootReducer;
