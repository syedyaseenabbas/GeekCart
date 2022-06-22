import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes } from "react-router-dom";
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./Provider/AuthProvider";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
