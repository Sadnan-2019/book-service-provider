import { Button } from 'bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
          const navigate = useNavigate()

          const navigateRegister=(event)=>{
                    navigate("/register")

          }
          return (
                    <div className='w-50 mx-auto'>

 <h3 className='text-center'>Please Login</h3>
 <Form  >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            
            type="email"
            placeholder="Enter email"
            required
          />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
           
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        
        <button className='btn btn-primary' type='submit'>Login</button>
      </Form>

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