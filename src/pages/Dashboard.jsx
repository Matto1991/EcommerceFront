import React from "react";

import AdminDash from "../components/AdminDash";
import NavbarAdmin from "../components/NavbarAdmin";

function Dashboard() {
  return (
    <>
      <NavbarAdmin />
      <div className="d-flex">
        <AdminDash />
        <div className="container">
          <main className="flex-grow-1">
            <section className="p-4">
              <h3>Dashboard</h3>
              <div className="card">CARDS</div>
              <div className="d-flex justify-content-between pt-4">
                <h2 className="d-inline">Last 10 0rders</h2>
              </div>
              <div className="table-responsive text-center">
                <table className="table table-striped table-hover border border rounded shadow mt-5">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">UserID</th>
                      <th scope="col">Total Price</th>
                      <th scope="col">Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"> product.id</th>
                      <td> product.costumer </td>
                      <td> product.price</td>

                      <td>
                        <a href="#">
                          <button className="edit-btn mb-2 w-100">View</button>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
