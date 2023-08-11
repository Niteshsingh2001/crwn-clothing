
import { createContext, useEffect, useReducer } from "react";
import { createUserDocFromAuth, onAuthStateChangeListerner } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}


const userReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }

        default:
            throw new Error(`unhandled ${type} in userReducer`)
    }
}

const INTIAL_STATE = {
    currentUser: null,
}


export const UserProvider = ({ children }) => {
    // const [currentUser, setCurrentUser] = useState(null);


    const [{ currentUser }, dispatch] = useReducer(userReducer, INTIAL_STATE)

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
    }

    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangeListerner((user) => {
            if (user) {
                createUserDocFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};