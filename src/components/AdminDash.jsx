import React from "react";
import { Link } from "react-router-dom";

function AdminDash() {
  return (
    <nav className="sidebar border-end border-3 ">
      <ul className="nav flex-column ">
        <li className="nav-item">
          <Link to="/admin" className="nav-link text-dark offcanvas-link">
            <i className="bi bi-house me-2"></i>
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/products"
            className="nav-link text-dark offcanvas-link"
          >
            <i className="bi bi-handbag me-2"></i>
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/categories"
            className="nav-link text-dark offcanvas-link"
          >
            <i className="bi bi-card-list me-2"></i>
            Categories
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/users" className="nav-link text-dark offcanvas-link">
            <i className="bi bi-people me-2"></i>
            Users
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/orders"
            className="nav-link text-dark offcanvas-link"
          >
            <i className="bi bi-cart3 me-2"></i>
            Orders
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AdminDash;
