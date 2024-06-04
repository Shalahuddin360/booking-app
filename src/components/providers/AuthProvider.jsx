import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firbase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
const googleProvider = new GoogleAuthProvider();
    //user
const [user,setUser]=useState(null);
const [loading,setLoading] = useState(true)
   

  //createUser
  const createUser = (email,password) => {
   setLoading(true)
   return createUserWithEmailAndPassword(auth, email, password)
  };
  //signIn
  const signIn =(email,password)=> {
   setLoading(true)
   return signInWithEmailAndPassword(auth,email,password)
  }
  // resetPassword 
  const resetPassword = email => {
    setLoading(true)
    return sendPasswordResetEmail(auth,email)
  }

   //logOut
   const logOut=()=>{
    setLoading(true)
    return signOut(auth)

   }
   const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

   //observer user auth state
   useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth,currentUser=>{
     setUser(currentUser)
     setLoading(false)
    })
    //stop observing while unmounting 
    return ()=> unsubscribe();
   },[])
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    resetPassword
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
