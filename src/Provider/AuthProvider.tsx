import { useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import firebase from "firebase/app";
import { auth } from "../firebase";
import { User as FirebaseUser } from "firebase/auth";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";

interface Props {
    children: React.ReactNode;
  }
  

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);

  function Signin(email:string, password:string) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};