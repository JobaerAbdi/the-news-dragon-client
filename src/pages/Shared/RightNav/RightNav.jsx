import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook ,FaTwitter, FaInstagram } from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
import bg01 from  '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <div>
        <h4>Login With</h4>
        <Button className="mb-3" variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub /> Login with Github
        </Button>
      </div>
      <div className="mt-4">
        <h4>Find us on</h4>
        <ListGroup className="w-50">
          <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
          <ListGroup.Item className="my-3"> <FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item> <FaInstagram/> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone></Qzone>
      <div>
        <img src={bg01} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
