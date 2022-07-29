import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

function NavBar() {
  return (
    <Container className="container">
      <Navbar expand="lg" className="color-nav">
        <Container fluid className="navbar">
          <Navbar.Brand href="./">
            KargoEvi <span className="dot">•</span>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 color-nav"
              style={{ maxHeight: "100px" }}
            >
              <Nav.Link href="./services">HIZMETLERI</Nav.Link>
              <Nav.Link href="#action2">BLOG & HABERLER</Nav.Link>
              <Nav.Link href="#action3">BILGI BANKASI</Nav.Link>
              <Nav.Link href="#action4">GONDERI TAKIBI</Nav.Link>
              <Nav.Link href="#action4">İLETİŞİM</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar;
