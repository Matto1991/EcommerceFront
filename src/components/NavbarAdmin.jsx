import React from "react";
// import "flowbite";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./admin.css";
import OffCanvas from "./OffCanvas";
import Avatar from "@mui/material/Avatar";
import { Button } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarAdmin() {
  return (
    <Navbar
      className="navbar position-sticky shadow navbar-admin mb-4"
      expand="lg"
    >
      <Container>
        <Navbar.Brand>Administrator panel</Navbar.Brand>
        <NavDropdown className="text-black ms-auto mt-2">
          <NavDropdown.Item href="/profile">Your Profile</NavDropdown.Item>
          <NavDropdown.Item href="/orders">Your Orders</NavDropdown.Item>
          <NavDropdown.Item href="#">Logout</NavDropdown.Item>
        </NavDropdown>
        <Avatar alt="Remy Sharp" src="/img/imagenAdmin.png" className="mx-1" />
        <OffCanvas />
      </Container>
    </Navbar>
  );
}

export default NavbarAdmin;
