
import { createContext, useState, useEffect } from "react";
import { createUserDocFromAuth, onAuthStateChangeListerner } from "../utils/firebase/firebase.utils";


export const UserContext = createContext(
    {
        currentUser: null, setCurrentUser: () => null
    }
)


export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser }

    useEffect(() => {
        const unsubscribe = onAuthStateChangeListerner((user) => {
            if (user) {
                createUserDocFromAuth(user)
            }

        })

        return unsubscribe
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}