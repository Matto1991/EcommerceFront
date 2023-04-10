import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import { setLoggedUser } from "../redux/sessionReducer";

function NavbarOther() {
  const [isScrolling, setIsScrolling] = useState(false);
  const loggedUser = useSelector((state) => state.session);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLoggedUser({ token: null, user: null }));
  };

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
      className={`navbar ${
        isScrolling ? "navbar-dynamic" : "navbar-other-static"
      }`}
      expand="lg"
    >
      <Container>
        <Navbar.Brand
          href="/"
          className={`${
            isScrolling ? "navbar-dynamic-logo" : "navbar-other-static-logo"
          }`}
        >
          Ecozy Luxury
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-movil">
            <div
              className={`position-relative ${
                isScrolling ? "navbar-dynamic-text" : "navbar-other-static-text"
              }`}
            >
              {loggedUser?.isAdmin && <Nav.Link href="/admin">Admin</Nav.Link>}
            </div>
            <div
              className={`position-relative ${
                isScrolling ? "navbar-dynamic-text" : "navbar-other-static-text"
              }`}
            >
              <Nav.Link href="/">Home</Nav.Link>
            </div>
            <div
              className={`position-relative ${
                isScrolling ? "navbar-dynamic-text" : "navbar-other-static-text"
              }`}
            >
              <Nav.Link href="/products">Products</Nav.Link>
            </div>
            <div
              className={`position-relative ${
                isScrolling ? "navbar-dynamic-text" : "navbar-other-static-text"
              }`}
            >
              <Nav.Link href="/project/details">About&nbsp;Project</Nav.Link>
            </div>
            <NavDropdown className={"navbar-dynamic-text"} title="Categories">
              <NavDropdown.Item href="/category/living">
                Living
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/bedroom">
                Bedroom
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/dining">
                Dining
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/sets">Sets</NavDropdown.Item>
            </NavDropdown>
            <div className="d-flex  align-items-lg-center">
              <Avatar
                src={
                  loggedUser.token
                    ? `${process.env.REACT_APP_BACKEND_URL}/img/users/${loggedUser.avatar}`
                    : `${process.env.REACT_APP_BACKEND_URL}/img/users/no_user.png`
                }
                alt={
                  loggedUser.token ? `${loggedUser.firstname}` : "User picture"
                }
                className="navbar-avatar ms-3 ms-lg-4"
              />
              <NavDropdown
                className={` ${
                  isScrolling
                    ? "navbar-dynamic-dropdown"
                    : "navbar-other-static-dropdown"
                }`}
              >
                {loggedUser.token ? (
                  <>
                    <NavDropdown.Item href="/orders">
                      Your orders
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={handleLogout}>
                      Logout
                    </NavDropdown.Item>
                  </>
                ) : (
                  <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                )}
              </NavDropdown>
            </div>
            <Nav.Link className="d-flex ms-4 ms-lg-0">
              <Cart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarOther;
