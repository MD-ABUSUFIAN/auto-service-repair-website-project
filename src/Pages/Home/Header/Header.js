import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png';

const Header = () => {
    return (
        <div>
  <Navbar bg="dark" variant="dark" className=" fs-3 p-3">
        <Container>
            <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
            <Nav className="ms-auto pe-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Service</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
            <Nav.Link href="#pricing">contact Us</Nav.Link>
            </Nav>
        </Container>
  </Navbar>

        </div>
    );
};

export default Header;