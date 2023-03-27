import axios from "axios";
import React, { useEffect, useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";

function AdminOrder() {
  const [orders, setOrders] = useState([]);
console.log(orders)
  useEffect(() => {
    const getOrders = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BACKEND_URL}/orders`,
      });
      setOrders(response.data);
      console.log(response.data);
    };
    getOrders();
  }, []);

  return (
    <div>
      <NavbarAdmin />
      <section className="container">
        <div className="d-flex justify-content-between pt-4">
          <h2 className="d-inline">Orders</h2>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-hover border border rounded shadow mt-5">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">User</th>
                <th scope="col">Total Price</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            {/* {orders.map((order) => {
              return ( */}
            <tbody>
              <tr>
                <th scope="row"> order id</th>
                <td> user Id </td>
                <td> total Price</td>
                <td>
                  <i className="bi bi-box-seam me-2"></i>
                  status
                </td>
                <td>
                  <a href="/panel/admin/item.id/edit">
                    <button className="edit-btn mb-2 w-100">Edit</button>
                  </a>
                </td>
              </tr>
            </tbody>
            {/* );
            })} */}
          </table>
        </div>
      </section>
    </div>
  );
}

export default AdminOrder;
