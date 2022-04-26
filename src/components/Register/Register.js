import React from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Register = () => {
  // const auth = getAuth(app)
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
  //     console.log(auth)

  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  const handleRegister = (event) => {
    //     console.log("ejknss");
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
    navigate("/");
    // console.log(name,email,password)
  };
  if (error) {
    //     return <p>{error.message}</p>
    console.log(error);
  }
  return (
    <div className="w-50  mx-auto">
      <h1 className="text-center">Please Register</h1>

      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>

        <input className=" btn btn-info" type="submit" value="Register" />
      </Form>
      <p className="text-center bg-dark text-light mt-2 rounded">
        Already accout?
        <Link
          to="/login"
          className="text-center text-decoration-none text-danger"
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
