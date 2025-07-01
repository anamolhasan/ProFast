import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { AuthContext } from "./AuthContext";

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }


  const logOut = () => {
    setLoading(true)
    return signOut(auth)
            //  .then(()=>{
            //   console.log('user Log out')
            //  })
            //  .catch(err => console.log(err))
  }



  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        console.log('user in the auth state change', currentUser)
        setLoading(false)
    })
    return () => {
        unsubscribe()
    }
  },[])


  const userInfo = {
    user,
    loading,
    createUser,
    signinUser,
    signInWithGoogle,
    logOut
  };


  return <AuthContext value={userInfo}>
              {children}
         </AuthContext>;
};

export default AuthProvider;
