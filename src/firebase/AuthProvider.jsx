import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "./firebase.config";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    
    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider);

    }
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user been spying');
            setUser(currentUser)
        })
        return ()=> {
            unSubscribe();
        }
    },[])




    const AuthInfo = {user, signUp, signIn, signInGoogle}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes ={
    children: PropTypes.node
}