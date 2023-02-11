import logo from '../../assets/img/logo.png'
import CarritoDesplegable from '.././CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand className="d-flex align-items-center brandNavBar">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top .BrandNavBar"
                />
                <NavLink to="/" className="brandNavBar">
                    <span className="ml-2">DRESS IT UP</span>
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink activeclassName="active" className="inactive linkNavBar" to="/category/shirts">T-SHIRTS</NavLink>
                    <NavLink activeclassName="active" className="inactive linkNavBar" to="/category/pants">PANTS</NavLink>
                    <NavLink activeclassName="active" className="inactive linkNavBar" to="/category/hoodies">HOODIES</NavLink>
                </Nav>
            </Navbar.Collapse>
            <CarritoDesplegable/>
        </Navbar>
    );
}
export default NavBar