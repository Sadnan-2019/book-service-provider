// import { Button } from "bootstrap";
// import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Login = () => {
  const [signInWithGoogle, googleUser, loading, error] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, signInuser, signInloading, signInerror] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const navigateRegister = (event) => {
    navigate("/register");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
    navigate("/");
    // console.log("login")
  };

  if (googleUser) {
    navigate("/");
  }

  return (
    <div className="w-50 mx-auto">
      <h3 className="text-center">Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </Form>
      <button
        className="btn btn-primary my-2"
        onClick={() => signInWithGoogle()}
      >
        SignWithGoogle
      </button>

      <p className="text-center bg-dark text-light mt-2 rounded">
        New to our book houee?{" "}
        <Link
          to="/register"
          onClick={navigateRegister}
          className="text-center text-decoration-none text-danger"
        >
          Please Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
