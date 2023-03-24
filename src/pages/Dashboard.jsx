import React from "react";
// import AdminOptions from "../components/AdminOptions";
import NavbarAdmin from "../components/NavbarAdmin";
import OffCanvas from "../components/OffCanvas";

function Dashboard() {
  return (
    <>
      <NavbarAdmin />
      <div>
        {/* <AdminOptions /> */}
        <section className="container">
          <h1>AdminHome</h1>
          <OffCanvas />
          <div className="d-flex justify-content-between pt-4">
            <h2 className="d-inline">Last 10 0rders</h2>

            <a href="/panel/admin/crear">
              <button className="btn btn-success btn-m">New</button>
            </a>
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
                      <button className="btn btn-dark mb-2 w-100">Edit</button>
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
