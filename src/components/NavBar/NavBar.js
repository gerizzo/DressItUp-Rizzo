import { Container, Row, Col, Nav, NavDropdown, Navbar} from 'react-bootstrap';
import logo from '../../assets/img/logo.png'
import CarritoDesplegable from '.././CartWidget/CartWidget';

const NavBar = () => {
  return (
      <Navbar collapseOnSelect expand="lg" variant="light" bg="light">
          <Container>
              <div className="d-flex justify-content-between">
                  <Navbar.Brand href="/" className="d-flex align-items-center">
                      <img
                          alt=""
                          src={logo}
                          width="30"
                          height="30"
                          className="d-inline-block align-top"
                      />
                      <span className="ml-2">DRESS IT UP</span>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
              </div>
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                      <NavDropdown title="CLOTHES" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">T-SHIRTS</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">PANTS</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">HOODIES & SWEATSHIRTS</NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
              <CarritoDesplegable/>
          </Container>
      </Navbar>
  );
}

export default NavBar