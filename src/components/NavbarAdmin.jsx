import React from "react";
// import "flowbite";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./admin.css";
import OffCanvas from "./OffCanvas";

function NavbarAdmin() {
  return (
    <Navbar
      className="navbar position-sticky shadow navbar-admin mb-4"
      expand="lg"
    >
      <Container>
        <Navbar.Brand>Administrator panel</Navbar.Brand>
        <OffCanvas />

      
      </Container>
    </Navbar>
  );
}

export default NavbarAdmin;
