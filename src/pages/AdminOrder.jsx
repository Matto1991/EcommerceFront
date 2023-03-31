import axios from "axios";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import AdminDash from "../components/AdminDash";

function AdminOrder() {
  const token = useSelector((state) => state.session.token);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/orders`,
      });

      setOrders(response.data);
      console.log(orders);
    };

    getOrders();
  }, []);

  return (
    <div>
      <NavbarAdmin />

      <div className="d-flex">
        <AdminDash />

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
              <ul>
                {orders.map((order) => {
                  <li key={order.id}>
                    <tbody>
                      <tr>
                        <th scope="row">{order.id}</th>
                        <td> user Id </td>
                        <td> total Price</td>
                        <td>
                          <i className="bi bi-box-seam me-2"></i>
                          status
                        </td>
                      </tr>
                    </tbody>
                    ;
                  </li>;
                })}
              </ul>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AdminOrder;
