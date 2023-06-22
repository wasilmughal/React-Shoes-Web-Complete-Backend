import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Images from "../Images/logo.png";
import { Row,Col } from "react-bootstrap";




function Home() {
  return (
    <>
      <div>
        <Navbar
          bg="smoke"
          expand="lg"
          style={{ borderBottom: "1px solid black" }}
        >
          <Container fluid>

 
  <Navbar.Brand href="#">
              <Link to="/">
                <img src={Images} alt="" style={{ height: "40px" }} />
              </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{
                  display: "flex",
                  marginLeft: "300px",
                }}
                navbarScroll
              >
                <Nav.Link>
                  <Link
                    to="footer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    WishList
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/service"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Cart
                  </Link>
                </Nav.Link>
                <Nav.Link>
              <Link
                    to="/signup"
                    style={{ textDecoration: "none"     , color: "black" }}
                  >
                   Signup
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                   Login
                  </Link>
                </Nav.Link>

                </Nav>
            </Navbar.Collapse>
  
 




          
                
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Home;
