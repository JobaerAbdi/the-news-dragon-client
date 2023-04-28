import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container className="w-25 mt-5">
        <h2>Please Login!!!</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="******" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check name='accept' type="checkbox" label="Accept Terms and Conditions" />
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
