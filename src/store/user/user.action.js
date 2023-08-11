import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user) => {
    return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
}

// user.action.js
// export const setCurrentUser = (user) => {
//     return {
//         type: 'SET_CURRENT_USER',
//         payload: user
//     };
// };
