import logo from '../../assets/img/logo.png'
import CarritoDesplegable from '.././CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <NavLink to="/" className="linkNavBar">
            <Navbar.Brand className="d-flex align-items-center brandNavBar">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top .BrandNavBar"
                />
                <span className="ml-2">DRESS IT UP</span>
            </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink activeclassname="active" className="inactive linkNavBar" to="/category/shirts">T-SHIRTS</NavLink>
                    <NavLink activeclassname="active" className="inactive linkNavBar" to="/category/pants">PANTS</NavLink>
                    <NavLink activeclassname="active" className="inactive linkNavBar" to="/category/hoodies">HOODIES</NavLink>
                </Nav>
            </Navbar.Collapse>
            <CarritoDesplegable/>
        </Navbar>
    );
}
export default NavBar
