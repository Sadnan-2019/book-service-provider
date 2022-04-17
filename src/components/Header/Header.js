import React from 'react';
import { Container, Nav, Navbar,   } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
          return (
                    <>
                          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/"  ><h5>My Book House</h5></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
       
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
      <Nav.Link eventKey={2} as={Link} to="/login">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
                          
                    </>
          );
};

export default Header;