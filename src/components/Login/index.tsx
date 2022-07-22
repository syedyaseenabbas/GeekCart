import React, { useState, MouseEvent, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Container, Form, Navbar, Row, Alert } from "react-bootstrap";
import { auth } from "../../Firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const googleAuthProvider = new GoogleAuthProvider();

  const gooleSignIn = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithPopup(auth, googleAuthProvider);
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const signIn = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, emailRef.current!.value, passwordRef.current!.value);
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    }
  };


  return (
    <>
      <Navbar className="justify-content-between" bg="dark" variant="dark">
        <Navbar.Brand style={{ paddingLeft: "20px" }}>User Authentication</Navbar.Brand>
      </Navbar>
      <Container style={{ maxWidth: "500px" }} fluid>
        <Form className="mt-4">
          <Form.Group controlId="formEmail">
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Label>Email</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="email" />
          </Form.Group>
          <Form.Group style={{ marginBottom: "8px" }} controlId="formPassword">
            <Form.Label style={{ marginTop: "0.8rem" }}>Password</Form.Label>
            <Form.Control ref={passwordRef} type="password" placeholder="password" />
          </Form.Group>
          <Row>
            <Col xs={4} style={{ width: "100px" }}>
              <Button onClick={signIn} className="mt-10" type="button" style={{ background: "#2b8be5", marginTop: "10px" }}>
                Log In
              </Button>
            </Col>
            <Button className="mt-10" onClick={gooleSignIn} type="button" style={{ background: "#2b8be5", width: "130px", marginTop: "10px" }}>
              Google Login
            </Button>
            <Col style={{ marginTop: "11px", width: "275px", marginLeft: "250px" }} xs={8} className="d-flex justify-content-end align-items-center">
              Don't have an account? <Link style={{ paddingLeft: "5px" }} to="/SignUp">SignUp</Link>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default Login;
