import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../style/NavBar.css";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


const NavBarElements = () => {

  return (
    <Navbar
      fixed="top"
      variant="dark"
      expand="lg"
      style={{ backgroundColor: "black" }}
    >
      <Navbar.Brand
        href="/"
        style={{
          fontWeight: 1000,
          color: "#EEB000",
          fontSize: 35,
          marginLeft: "3%",
        }}
      >
        GIMME-DUCK
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Introduction">Introduction</Nav.Link>
          {/* <Nav.Link href="/Tutorial">Tutorial</Nav.Link> */}
          <Nav.Link href="/History">History</Nav.Link>
          <Nav.Link href="/Market">Market</Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <MobileView>
      </MobileView>

    </Navbar>
  );
};

export default NavBarElements;
