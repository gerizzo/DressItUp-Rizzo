import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.png'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CarritoDesplegable from './CartWidget';

const NavBar = () => {
    return (
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                DRESS IT UP
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">NEW ARRIVALS</Nav.Link>
                    <Nav.Link href="#link">WOMAN</Nav.Link>
                    <Nav.Link href="#link">MAN</Nav.Link>
                    <NavDropdown title="CLOTHES" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">T-SHIRTS</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        PANTS
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">JEANS</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                        SHOES
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">
                        ACCESSORIES
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#home">SALE</Nav.Link>
                    <Nav.Link href="#home">GIFT CARDS</Nav.Link>
                </Nav>
                </Navbar.Collapse>

                <Navbar.Collapse className="justify-content-end d-flex">
                    <Navbar.Text>
                            <CarritoDesplegable></CarritoDesplegable>
                    </Navbar.Text>
                </Navbar.Collapse>
                
            </Container>
          </Navbar>
      );
}

export default NavBar