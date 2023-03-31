import React, { useEffect, useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import axios from "axios";
import { useSelector } from "react-redux";
import AdminDash from "../components/AdminDash";

function AdminOwnOrder() {
  const token = useSelector((state) => state.session.token);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "get",
        url: `${process.env.REACT_APP_BACKEND_URL}/orders/${token.id}`,
      });
      setOrders(response.data);
    };
    getOrders();
  }, []);
  return (
    <div>
      <NavbarAdmin />

      <div className="d-flex">
        <AdminDash />
        <section className="container">
          <h2 className="d-inline">Orders</h2>
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
    </div>
  );
}

export default AdminOwnOrder;
