import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container} from "react-bootstrap";

const Header = () => {
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
    </Container>
  );
};

export default Header;
