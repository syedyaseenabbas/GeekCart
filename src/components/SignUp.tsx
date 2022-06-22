import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useRef, MouseEvent } from "react";
import { Button, Col, Container, Form, Navbar, Row } from "react-bootstrap";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const Signup:React.FC = () => {
  const user = useContext(AuthContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const createAccount = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // setError("");
    try {
      await createUserWithEmailAndPassword( auth, emailRef.current!.value, passwordRef.current!.value);
      // useNavigate("/");
    } catch (err:any) {
      // setError(err.message);
    }
  };

  const signIn = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // setError("");
    try {
      await signInWithEmailAndPassword( auth, emailRef.current!.value, passwordRef.current!.value);
      // useNavigate("/");
    } catch (err:any) {
      // setError(err.message);
    }
  };
  
  
  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <>
    <Navbar className="justify-content-between" bg="dark" variant="dark">
      <Navbar.Brand>User Authentication</Navbar.Brand>
    </Navbar>
    <Container style={{ maxWidth: "500px" }} fluid>
      <Form className="mt-4">
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="email" />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="password" />
        </Form.Group>
        <Row>
          <Col xs={6}>
            <Button onClick={createAccount} type="button" >
              Sign Up
            </Button>
          </Col>
          <Col xs={6}>
            <Button onClick={signIn} type="button" variant="secondary" >
              Sign In
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  </>
);
};

export default Signup;