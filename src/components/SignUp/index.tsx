import { Link, useNavigate } from "react-router-dom";
import React, { useRef, MouseEvent, useState } from "react";
import { Button, Col, Container, Form, Navbar, Row, Alert } from "react-bootstrap";
import { auth } from "../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ErrorMessage, Formik } from 'formik';

const Signup: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const createAccount = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, emailRef.current!.value, passwordRef.current!.value);
      navigate("/Login");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <>
      <Navbar className="justify-content-between" bg="dark" variant="dark">
        <Navbar.Brand style={{ paddingLeft: "20px" }}>User Authentication</Navbar.Brand>
      </Navbar>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = { email: '', password: '' };
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          else if (!/^.{8,32}$/i.test(values.password)) {
            errors.password = 'Minimum length should be 8';
          }
          return errors;
        }}
        onSubmit={(values) => {
          createUserWithEmailAndPassword(auth, values.email, values.password);
          navigate("/Login");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Container style={{ maxWidth: "500px" }} fluid>
              <Form className="mt-4">
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control ref={emailRef} type="email" name="email" onChange={handleChange} onBlur={handleBlur}
                    value={values.email} placeholder="email" />
                  <div style={{ color: "red" }}>{errors.email && touched.email && errors.email}</div>
                </Form.Group>
                <Form.Group style={{ marginBottom: "8px" }} controlId="formPassword">
                  <Form.Label style={{ marginTop: "0.8rem" }}>Password</Form.Label>
                  <Form.Control ref={passwordRef} type="password" name="password" onChange={handleChange} onBlur={handleBlur}
                    value={values.password} placeholder="password" />
                  <div style={{ color: "red" }}>{errors.password && touched.password && errors.password}</div>
                </Form.Group>
                <Row>
                  <Col xs={4}>
                    <Button onClick={createAccount} className="mt-10" type="button" style={{ background: "#2b8be5", marginTop: "10px" }}>
                      Sign Up
                    </Button>
                  </Col>
                  <Col style={{ marginTop: "11px" }} xs={8} className="d-flex justify-content-end align-items-center">
                    Already have an account? <Link style={{ paddingLeft: "5px" }} to="/Login">Login</Link>
                  </Col>
                </Row>
              </Form>
            </Container>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Signup;