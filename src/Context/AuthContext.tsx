import React from "react";
import firebase from "firebase/app";
import { User as FirebaseUser } from "firebase/auth";

export const AuthContext = React.createContext<FirebaseUser | null>(null);