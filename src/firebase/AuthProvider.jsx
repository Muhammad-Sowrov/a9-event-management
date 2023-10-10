import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "./firebase.config";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    
    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);

    }
    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user been spying');
            setUser(currentUser);
            setLoading(false);
        })
        return ()=> {
            unSubscribe();
        }
    },[])




    const AuthInfo = {user, signUp, signIn, logOut, loading, signInGoogle}
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