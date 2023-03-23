import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function OffCanvas({ name }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name} Dashboard
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement={"start"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Ecozy Luxury</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="nav flex-column ">
            <li className="nav-item">
              <Link to="/admin" className="nav-link text-dark">
                <i className="bi bi-house me-2"></i>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/products" className="nav-link text-dark">
                <i className="bi bi-handbag me-2"></i>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/users" className="nav-link text-dark">
                <i className="bi bi-people me-2"></i>
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/orders" className="nav-link text-dark">
                <i class="bi bi-cart3 me-2"></i>
                Orders
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;
