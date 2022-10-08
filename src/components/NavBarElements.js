import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

//    <Navbar scrolling dark expand="md" fixed="top" >

const NavBarElements = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">GIMME-DUCK</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Introduction">Introduction</Nav.Link>
            <Nav.Link href="/Tutorial">Tutorial</Nav.Link>
            <Nav.Link href="/History">History</Nav.Link>
            <Nav.Link href="/Market">Market</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarElements;
