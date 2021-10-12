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
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Container>
  </Navbar>

        </div>
    );
};

export default Header;