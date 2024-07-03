import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo  from '../../asset/img/Logo/imgLogo.jpg'
import { FaHome , FaAddressBook , FaCartPlus} from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { NavLink } from 'react-router-dom'
function Navbarr() {
  return (
    <>
        <Navbar expand={'md'} className="navbar-body-style mb-1">
          <Container fluid>
            <Navbar.Brand className='font-lalehar fs-3'><img src={Logo} className='logo-image-style' /> گسترش آلیاژ تندیس
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'md'}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${'md'}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${'md'}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'md'}`} className='font-lalehar'> 
                <img src={Logo} className='logo-image-style' />شرکت گسترش آلیاژ تندیس
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='navbar-md-backgroundColor'>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown
                  className='text-light font-lalehar'
                  title="راه های ارتباطی"
                  id={`offcanvasNavbarDropdown-md-${'md'}`}
                >
                <div className='NavDropdown-body-style'>
                  <NavDropdown.Item href="">۷۷۷۱۳۰۳۴ ۰۲۱</NavDropdown.Item>
                  <NavDropdown.Item href="">۷۷۷۱۳۰۳۴ ۰۲۱</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="">۰۹۱۲۰۷۰۹۸۲۲</NavDropdown.Item>
                </div>
                </NavDropdown>
                  <NavLink className='font-lalehar align-self-start' to="/"><FaHome />-خانه</NavLink>
                  <NavLink className='font-lalehar align-self-start' to="/product"><FaCartPlus />-محصولات</NavLink>
                  <NavLink className='font-lalehar align-self-start' to="/services"><FaEnvelopeOpenText /> -ارائه خدمات</NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default Navbarr;