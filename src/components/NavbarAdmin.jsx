import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./admin.css";
import OffCanvas from "./OffCanvas";
import Avatar from "@mui/material/Avatar";
import NavDropdown from "react-bootstrap/NavDropdown";
import DropdownButton from 'react-bootstrap/DropdownButton';

function NavbarAdmin() {
  return (
    <Navbar
      className="navbar position-sticky shadow navbar-admin mb-4"
      expand="lg"
    >
      <Container>
        <Navbar.Brand>Administrator panel</Navbar.Brand>
        <OffCanvas />
        <DropdownButton
        id="dropdown-button-dark-example2"
        menuVariant="light"
        className="mt-2"
      >
          <NavDropdown.Item href="/profile">Your profile</NavDropdown.Item>
          <NavDropdown.Item href="/orders">Your Orders</NavDropdown.Item>
          <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
        </DropdownButton>
        <Avatar alt="Remy Sharp" src="/img/imagenAdmin.png" />
      </Container>
    </Navbar>
  );
}

export default NavbarAdmin;
