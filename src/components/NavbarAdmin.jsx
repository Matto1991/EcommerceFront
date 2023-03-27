import React from "react";
// import "flowbite";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./admin.css";
import OffCanvas from "./OffCanvas";
import Avatar from "@mui/material/Avatar";
import { Button } from "react-bootstrap";

function NavbarAdmin() {
  return (
    <Navbar
      className="navbar position-sticky shadow navbar-admin mb-4"
      expand="lg"
    >
      <Container>
        <Navbar.Brand>Administrator panel</Navbar.Brand>
        <Button className="ms-auto btn-img-admin">
          <Avatar
            alt="Remy Sharp"
            src="/img/imagenAdmin.png"
            className="ms-auto"
          />
        </Button>
        <OffCanvas />
      </Container>
    </Navbar>
  );
}

export default NavbarAdmin;
