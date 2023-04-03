import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Cart from "../components/Cart";
import { Avatar } from "@mui/material";
import { setToken } from "../redux/sessionReducer";

function NavbarHome() {
  const [isScrolling, setIsScrolling] = useState(false);

  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );

  const handleLogout = () => {
    dispatch(setToken({ token: null, user: null }));
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
          <Nav id="navbar-movil">
            <div
              className={`position-relative ${
                isScrolling ? "navbar-dynamic-text" : "navbar-static-text"
              }`}
            >
              <Nav.Link href="/">Home</Nav.Link>
            </div>
            <div
              className={`position-relative ${
                isScrolling ? "navbar-dynamic-text" : "navbar-static-text"
              }`}
            >
              <Nav.Link href="/products">Products</Nav.Link>
            </div>

            <div
              className={`position-relative ${
                isScrolling ? "navbar-dynamic-text" : "navbar-static-text"
              }`}
            >
              <Nav.Link href="/project-details">About&nbsp;Project</Nav.Link>
            </div>

            <NavDropdown
              className={`w-25 ${
                isScrolling ? "navbar-dynamic-text" : "navbar-static-text"
              }`}
              title="Categories"
            >
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
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Inspiration
              </NavDropdown.Item>
            </NavDropdown>
            <Avatar
              alt="Remy Sharp"
              src="/img/imagenAdmin.png"
              className="navbar-avatar ms-4"
            />
            <NavDropdown
              className={` ${
                isScrolling ? "navbar-dynamic-text" : "navbar-static-text"
              }`}
            >
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="d-flex">
              <Cart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHome;
