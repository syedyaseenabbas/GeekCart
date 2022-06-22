import React from 'react';
import Home from './pages/Home';
import {Routes, Route, Router, BrowserRouter} from "react-router-dom"
import { Container, Row, Col} from "react-bootstrap";
import Login from "./components/Login";
import Signup from './components/SignUp';
import ProtectedRoute from "./components/ProtectedRoute";


const App:React.FC = ()=> {
  return (
    // <Container>
    //   <Row>
    //     <Col>
    //      <Routes>
    //       <Route path='/' element={<Login/>}/>
    //       <Route path='/' element={<Signup/>}/>
    //      </Routes>
    //     </Col>
    //   </Row>
    // </Container>
    // <Container style={{ width: "400px" }}>
    //   <Row>
    //     <Col>
    //       <UserAuthContextProvider>
    //         <Routes>
    //           <Route
    //             path="/Home"
    //             element={
    //               <ProtectedRoute>
    //                 <Home />
    //               </ProtectedRoute>
    //             }
    //           />
    //           <Route path="/" element={<Login />} />
    //           <Route path="/SignUp" element={<Signup />} />
    //         </Routes>
    //       </UserAuthContextProvider>
    //     </Col>
    //   </Row>
    // </Container>
    <BrowserRouter>
    
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/SignUp' element={<Signup/>} />
    </Routes>
    </BrowserRouter>
    // <Home/>
  );
}

export default App;
