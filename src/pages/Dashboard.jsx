import React from "react";
import NavbarAdmin from "../components/NavbarAdmin";

function Dashboard() {
  return (
    <>
      <div>
      <NavbarAdmin />
        <section className="container">
          <h3>Dashboard</h3>
          <div className="d-flex justify-content-between pt-4">
            <h2 className="d-inline">Last 10 0rders</h2>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-hover border border rounded shadow mt-5">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">UserID</th>
                  <th scope="col">Total Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"> product.id</th>
                  <td> product.costumer </td>
                  <td> product.price</td>

                  <td>
                    <a href="/panel/admin/item.id/edit ">
                      <button className="edit-btn mb-2 w-100">View</button>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
