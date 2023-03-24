import React from "react";
import "flowbite";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./admin.css";
import OffCanvas from "./OffCanvas";
import Avatar from "@mui/material/Avatar";
import NavDropdown from "react-bootstrap/NavDropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function NavbarAdmin() {
  return (
    <Navbar
      className="navbar position-sticky shadow navbar-admin mb-4"
      expand="lg"
    >
      <Container>
        <Navbar.Brand>Administrator panel</Navbar.Brand>
        <OffCanvas />
        <NavDropdown.Item href="/profile">Your profile</NavDropdown.Item>
        <NavDropdown.Item href="/orders">Your Orders</NavDropdown.Item>
        <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
        <div class="flex items-center md:order-2">
          <button
            type="button"
            class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="w-8 h-8 rounded-full"
              src="/img/imagenAdmin.png"
              alt="user photo"
            />
          </button>
          {/* <!-- Dropdown menu --> */}
          <div
            class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div class="px-4 py-3">
              <span class="block text-sm text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <ul class="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarAdmin;
