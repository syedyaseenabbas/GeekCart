import React from 'react';
import Home from './pages/Home';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Login from "./components/Login";
import Signup from './components/SignUp';

const App:React.FC = ()=> {
  return (
    
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/SignUp' element={<Signup/>} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
