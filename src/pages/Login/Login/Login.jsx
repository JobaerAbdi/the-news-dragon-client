import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/UserContext";

const Login = () => {
  const {logIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/category';


  const handleSignIn = event=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    logIn(email,password)
    .then(result=>{
      console.log(result.user);
      navigate(from, {replace : true})
    })
    .catch(error=>{
      console.log(error.message);
    })
  };


  return (
    <Container className="w-25 mt-5">
        <h2>Please Login!!!</h2>
      <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="******" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button><br/>
        <Form.Text className="text-info">
           Don't have an account? Please  <Link to='/register'>Register</Link>
        </Form.Text><br/>
        <Form.Text className="text-success">
            We'll never share your email with anyone else.
        </Form.Text><br/>
        <Form.Text className="text-danger">
            We'll never share your email with anyone else.
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
