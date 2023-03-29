import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Cart from "../components/Cart";

function NavbarNav() {
  const [isScrolling, setIsScrolling] = useState(false);

  const products = useSelector((state) => state.cart.products);

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
          <Nav className="ms-auto align-items-center">
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
              <Nav.Link href="/about-us">About</Nav.Link>
            </div>
            <div
              className={`position-relative ${
                isScrolling ? "navbar-dynamic-text" : "navbar-static-text"
              }`}
            >
              <Nav.Link href="/about">Project&nbsp;detalis</Nav.Link>
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
            <NavDropdown.Item href="#" className="ms-3">
              <Cart />
              {products.length > 0 && (
                <small className="text-white">
                  {console.log(products)}
                  {products.reduce(
                    (acc, product) => acc + products.length + product.quantity,
                    0
                  )}
                </small>
              )}
            </NavDropdown.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarNav;
