import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers'; // the value from combineReducers
import thunk from 'redux-thunk';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';

const middlewares = [thunk];

const enhancers = compose(
    applyMiddleware(...middlewares)
);

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet, // see "Merge Process" section for details.
    //blackList:[authenticate]
    blacklist:[]         
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    pReducer,
    // undefined, // {}, // initial state
    enhancers
);
export const persistor = persistStore(store);