import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/UserContext";

const NavigationBar = () => {
  const {user, logOut} = useContext(AuthContext);
  //const navigate = useNavigate();
  const handleLogout= ()=>{
    logOut()
    // .then(navigate('/login'))
    .then()
    .catch(error=>{
      console.log(error.message);
    })
  };


  return (
    <Container>
      <Navbar
        className="my-3"
        collapseOnSelect
        expand="lg"
        bg="info"
        variant="light"
      >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#pricing">
                <Link to="/category/">Home</Link>
              </Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
                { 
                    user && <FaUserCircle style={{ fontSize: "40px" }} />
                }
                
                {
                    user ? 
                    <Button onClick={handleLogout} variant="dark">Log Out</Button>
                    : 
                    <Link to="/login">
                        <Button variant="dark">Log In</Button>
                    </Link>
                }
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
