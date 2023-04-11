import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./admin.css";

function AdminDash() {
  // eslint-disable-next-line
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleListItemClick = (event, link) => {
    event.preventDefault();
    handleLinkClick(link);
    navigate(link); // Programmatically navigate to the clicked URL
  };

  return (
    <nav className="sidebar border-end border-1 col-sm-3">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link
            to="/admin"
            className={`nav-link text-dark offcanvas-link ${
              location.pathname === "/admin" ? "offcanvas-link-active" : ""
            }`}
            onClick={(event) => handleListItemClick(event, "/admin")}
          >
            <i
              className={`bi bi-graph-up-arrow me-2 icon-sidebar ${
                location.pathname === "/admin"
                  ? "offcanvas-link-children-active"
                  : ""
              }`}
            ></i>
            <span
              className={`nav-link-text ${
                location.pathname === "/admin"
                  ? "offcanvas-link-children-active"
                  : ""
              }`}
            >
              Dashboard
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/products"
            className={`nav-link text-dark offcanvas-link ${
              location.pathname === "/admin/products"
                ? "offcanvas-link-active"
                : ""
            }`}
            onClick={(event) => handleListItemClick(event, "/admin/products")}
          >
            <i
              className={`bi bi-bag me-2 icon-sidebar ${
                location.pathname === "/admin/products"
                  ? "offcanvas-link-children-active"
                  : ""
              }`}
            ></i>
            <span
              className={`nav-link-text ${
                location.pathname === "/admin/products"
                  ? "offcanvas-link-children-active"
                  : ""
              }`}
            >
              Products
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/users"
            className={`nav-link text-dark offcanvas-link ${
              location.pathname === "/admin/users"
                ? "offcanvas-link-active"
                : ""
            }`}
            onClick={(event) => handleListItemClick(event, "/admin/users")}
          >
            <i
              className={`bi bi-people me-2 icon-sidebar ${
                location.pathname === "/admin/users"
                  ? "offcanvas-link-children-active"
                  : ""
              }`}
            ></i>
            <span
              className={`nav-link-text ${
                location.pathname === "/admin/users"
                  ? "offcanvas-link-children-active"
                  : ""
              }`}
            >
              Users
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/categories"
            className={`nav-link text-dark offcanvas-link ${
              location.pathname === "/admin/categories"
                ? "offcanvas-link-active"
                : ""
            }`}
            onClick={(event) => handleListItemClick(event, "/admin/categories")}
          >
            <i
              className={`bi bi-card-list me-2 icon-sidebar ${
                location.pathname === "/admin/categories"
                  ? "offcanvas-link-children-active"
                  : ""
              }`}
            ></i>
            <span
              className={`nav-link-text ${
                location.pathname === "/admin/categories"
                  ? "offcanvas-link-children-active"
                  : ""
              }`}
            >
              Categories
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/orders"
            className={`nav-link text-dark offcanvas-link ${
              location.pathname === "/admin/orders"
                ? "offcanvas-link-active"
                : ""
            }`}
            onClick={(event) => handleListItemClick(event, "/admin/orders")}
          >
            <i
              className={`bi bi-cart me-2 icon-sidebar ${
                location.pathname === "/admin/orders"
                  ? "offcanvas-link-children-active"
                  : ""
              }`}
            ></i>
            <span
              className={`nav-link-text ${
                location.pathname === "/admin/orders"
                  ? "offcanvas-link-children-active"
                  : ""
              }`}
            >
              Orders
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link text-dark offcanvas-link">
            <i className="bi bi-house me-2 icon-sidebar"></i>
            <span className="nav-link-text">Website</span>
          </Link>
        </li>
        {/* Repeat the same pattern for other list items */}
      </ul>
    </nav>
  );
}

export default AdminDash;
