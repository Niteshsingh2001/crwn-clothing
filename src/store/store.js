import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";

// Root Reducer
import { rootReducer } from './rootreducer';


// const loggerMiddleware = (store) => (next) => (action) => {

//     if (!action.type) {
//         return next(action)
//     }

//     console.log("type :", action.type);
//     console.log("payload :", action.payload);
//     console.log("currentState :", store.getState());
//     console.log("type :", action.type);

//     next(action)
//     console.log("next state : ", store.getState());

// }


const middleware = [logger]
// const composeEnhancer = compose(applyMiddleware(...middleware))

export const store = createStore(rootReducer, undefined, applyMiddleware(logger))
