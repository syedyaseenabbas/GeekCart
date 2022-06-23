import { Link, useNavigate } from "react-router-dom";
import React, { useRef, MouseEvent, useState } from "react";
import { Button, Col, Container, Form, Navbar, Row, Alert} from "react-bootstrap";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Signup:React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const createAccount = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword( auth, emailRef.current!.value, passwordRef.current!.value);
      navigate("/Login");
    } catch (err:any) {
      setError(err.message);
    }
  };

  const signIn = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword( auth, emailRef.current!.value, passwordRef.current!.value);
      navigate("/");
    } catch (err:any) {
      setError(err.message);
    }
  };
  
  return (
    <>
    <Navbar className="justify-content-between" bg="dark" variant="dark">
      <Navbar.Brand>User Authentication</Navbar.Brand>
    </Navbar>
    <Container style={{ maxWidth: "500px" }} fluid>
      <Form className="mt-4">
        <Form.Group controlId="formEmail">
        {error && <Alert variant="danger">{error}</Alert>}
          <Form.Label>Email</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="email" />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="password" />
        </Form.Group>
        <Row>
          <Col xs={6}>
            <Button onClick={createAccount} type="button" style={{background: "#2b8be5"}}>
              Sign Up
            </Button>
          </Col>
          <Col xs={5}>
          Already have an account?
            <Button onClick={signIn} type="button" variant="secondary" style={{background: "#2b8be5"}}>
            <Link to="/Login">Log In</Link>
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  </>
);
};

export default Signup;