import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./admin.css";
import Avatar from "@mui/material/Avatar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedUser } from "../redux/sessionReducer";

function NavbarAdmin() {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.session.user);
  const handleLogout = () => {
    dispatch(setLoggedUser({ token: null, user: null }));
  };

  return (
    <Navbar className="navbar shadow navbar-admin mb-4" expand="lg">
      <Container>
        <Navbar.Brand className="text-white">Administrator panel</Navbar.Brand>
        <NavDropdown className="text-black ms-auto mt-2 text-white">
          <NavDropdown.Item href="/profile">Your Profile</NavDropdown.Item>
          <NavDropdown.Item href="/orders">Your Orders</NavDropdown.Item>
          <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
        </NavDropdown>
        <Avatar
          src={
            loggedUser
              ? `${process.env.REACT_APP_BACKEND_URL}/img/users/${loggedUser.avatar}`
              : `${process.env.REACT_APP_BACKEND_URL}/img/users/no_user.png`
          }
          alt={loggedUser ? `${loggedUser.firstname}` : "User picture"}
          className="mx-1"
        />
      </Container>
    </Navbar>
  );
}

export default NavbarAdmin;
