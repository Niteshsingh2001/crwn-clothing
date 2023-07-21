// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, getDoc, setDoc, doc, collection, writeBatch, query, getDocs } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdq3JDBsfiPgZhMW_GLdjG4lRLG9hQmpA",
    authDomain: "crwn-clothing-db-70d0f.firebaseapp.com",
    projectId: "crwn-clothing-db-70d0f",
    storageBucket: "crwn-clothing-db-70d0f.appspot.com",
    messagingSenderId: "245489507528",
    appId: "1:245489507528:web:d31af6da9d477db74a59fd"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account',
});



export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)



export const db = getFirestore()


export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
    const userDocRef = doc(db, "user", userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInfo })
        }
        catch (err) {
            console.log("Error Creating user", err)
        }
    }

    return userDocRef

}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}


export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangeListerner = (callBack) => onAuthStateChanged(auth, callBack)


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db);

    objectsToAdd.forEach(Object => {
        const docRef = doc(collectionRef, Object.title.toLowerCase())
        batch.set(docRef, Object)
    });

    await batch.commit()
    console.log("done")
}



export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
};