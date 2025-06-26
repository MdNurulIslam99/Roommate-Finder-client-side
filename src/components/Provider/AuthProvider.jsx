import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  //   GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  // signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(user);
  //   const googleProvider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // const signInWithGoogle =()=>{
  //    setLoading(true);
  //    return signInWithPopup(auth,googleProvider);
  // }

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updatedUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  });

  const authData = {
    user,
    setUser,
    createUser,
    signOutUser,
    signInUser,
    // signInWithGoogle,
    loading,
    setLoading,
    updatedUser,
    // googleProvider,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
