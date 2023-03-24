import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarNav() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset === 0) {
      setIsScrolling(false);
    } else {
      setIsScrolling(true);
    }
  };

  return (
    <Navbar
      className={`navbar ${isScrolling ? "navbar-dynamic" : "navbar-static"}`}
      expand="lg"
    >
      <Container>
        <Navbar.Brand
          href="/"
          className={`${
            isScrolling ? "navbar-dynamic-logo" : "navbar-static-logo"
          }`}
        >
          Ecozy Luxury
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/"
              className={`${
                isScrolling ? "navbar-dynamic-text" : "navbar-static-text"
              }`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#link"
              className={`${
                isScrolling ? "navbar-dynamic-text" : "navbar-static-text"
              }`}
            >
              About this project{" "}
            </Nav.Link>
            <NavDropdown
              className={`w-25 ${
                isScrolling ? "navbar-dynamic-text" : "navbar-static-text"
              }`}
              title="Categories"
            >
              <NavDropdown.Item href="#action/3.1">Living</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bedroom</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dining</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Sets</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Inspiration
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarNav;
