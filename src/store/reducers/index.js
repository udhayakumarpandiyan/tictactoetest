import { combineReducers } from 'redux'
import languageReducer from './language';
import authenticationReducer from './authentication';
import productReducer from './product';
import billingReducer from './billing';

const rootReducer = combineReducers({
    languageReducer, authenticationReducer, productReducer, billingReducer
})

export default rootReducer;
