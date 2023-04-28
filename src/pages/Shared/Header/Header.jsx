import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../context/UserContext";

const Header = () => {
  const {user} = useContext(AuthContext);
  return (
    <Container className="my-5">
      <div className="text-center">
        <img src={logo} alt="" />
        <h5 className="text-primary">Journalism Without Fear or Favour</h5>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>

      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={150}>
          I can be a React component, multiple React components, or just some
          text....I can be a React component, multiple React components, or just
          some text....
        </Marquee>
      </div>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#pricing">
                <Link to='/'>Home</Link>
              </Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              {user && 
              <Nav.Link href="#deets"><FaUserCircle style={{fontSize : '40px'}}/></Nav.Link>
              }
              <Nav.Link eventKey={2} href="#memes">
                {user ? 
                  <Button variant="dark">Log Out</Button> : 
                  <Link to='/login'>
                    <Button variant="dark">Log In</Button>
                  </Link> 
                }
              
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
