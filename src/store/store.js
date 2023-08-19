import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { loggerMiddleware } from "./middlewear/logger";
// Root Reducer
import { rootReducer } from './rootreducer';
import thunk from "redux-thunk";
import logger from "redux-logger";


const middleware = [process.env.NODE_ENV === 'development' && logger, thunk].filter(Boolean)

const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleware))

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, undefined, composedEnhancers)
export const persistorStore = persistStore(store)
