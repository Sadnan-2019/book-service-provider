// import { Button } from "bootstrap";
// import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login..css";

import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Login = () => {
  const location = useLocation();

  const [sendPasswordResetEmail, sending, errorReset] =
    useSendPasswordResetEmail(auth);

  let from = location.state?.from?.pathname || "/";
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
    // console.log(email)
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
    navigate("/");
    // console.log("login")
  };

  const [currentEmail, setCurrentEmail] = useState("");
  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setCurrentEmail(email);
  };

  const navigateResetPassword = async () => {
    // await sendPasswordResetEmail(email);
    // alert("Sent email");

    if (currentEmail) {
      await sendPasswordResetEmail(currentEmail);
      toast("Sent email");
      console.log(currentEmail);
    } else {
      toast("Please Enter Your Email ");
    }
  };

  if (signInuser) {
    navigate(from, { replace: true });
  }

  if (googleUser) {
    navigate("/");
  }

  return (
    <div className="w-50 mx-auto">
      <h3 className="text-center">Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            
            onBlur={handleEmailBlur}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
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
        New to our book houese?{" "}
        <Link
          to="/register"
          onClick={navigateRegister}
          className="text-center text-decoration-none text-danger"
        >
          Please Register
        </Link>
      </p>
      <p className="text-center bg-dark text-light mt-2 rounded">
        <span className="reset" onClick={navigateResetPassword}>
          Forget Password
        </span>
      </p>

      <ToastContainer />
    </div>
  );
};

export default Login;
