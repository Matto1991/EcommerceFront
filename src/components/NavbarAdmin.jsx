import React from "react";
// import "flowbite";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./admin.css";

import Avatar from "@mui/material/Avatar";

import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarAdmin() {
  return (
    <Navbar className="navbar shadow navbar-admin mb-4" expand="lg">
      <Container>
        <Navbar.Brand className="text-white">Administrator panel</Navbar.Brand>
        <NavDropdown className="text-black ms-auto mt-2 text-white">
          <NavDropdown.Item href="/profile">Your Profile</NavDropdown.Item>
          <NavDropdown.Item href="/orders">Your Orders</NavDropdown.Item>
          <NavDropdown.Item href="#">Logout</NavDropdown.Item>
        </NavDropdown>
        <Avatar alt="Remy Sharp" src="/img/imagenAdmin.png" className="mx-1" />
      </Container>
    </Navbar>
  );
}

export default NavbarAdmin;
