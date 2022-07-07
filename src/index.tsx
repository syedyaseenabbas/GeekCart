import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./Provider/AuthProvider";
import { Provider } from 'react-redux'
import { store } from './store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
    </Provider>
  </React.StrictMode>
);
