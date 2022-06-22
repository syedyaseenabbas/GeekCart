import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { User as FirebaseUser } from "firebase/auth";
import { AuthContext } from "../Context/AuthContext";

export const userAuthContext = createContext<FirebaseUser | null>(null);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);

  function logIn(email:string, password:string):any {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email:string, password:string):any {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut():any {
    return signOut(auth);
  }
  function googleSignIn():any {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={ user }
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}