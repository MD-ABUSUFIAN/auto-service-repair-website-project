import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.png';

const Header = () => {
    const {users,logOut,}=useAuth();
    return (
        <>
  <Navbar bg="dark" variant="dark" className=" fs-3 p-3" sticky="top" collapseOnSelect expand="lg">
        <Container>
                <Navbar.Brand href="#home"><img src={logo} className=" img-fluid  w-100  mx-auto "  alt="" /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
                <Nav.Link as={Link} to="/home#experts">Experts</Nav.Link>
                {users.email ? 
                <Button onClick={logOut} variant="light">Logout</Button>:
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                }
               
                <Navbar.Text>
                Signed in as: <a href="#login">{users?.displayName}</a>
                </Navbar.Text>
                </Navbar.Collapse>
                {/* <Nav className="ms-auto">
                
                </Nav> */}
        </Container>
  </Navbar>

        </>
    );
};

export default Header;