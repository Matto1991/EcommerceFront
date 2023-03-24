import React from "react";
import NavbarAdmin from "../components/NavbarAdmin";

function AdminOwnOrder() {
  return (
    <div>
      <NavbarAdmin />
      <section className="container">
        <h2 className="d-inline">Orders</h2>
        <div className="d-flex justify-content-between pt-4"></div>
      </section>
    </div>
  );
}

export default AdminOwnOrder;
