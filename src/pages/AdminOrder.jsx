import axios from "axios";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import AdminDash from "../components/AdminDash";

function AdminOrder() {
  const user = useSelector((state) => state.session);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/orders`,
      });
      setOrders(response.data);
    };

    getOrders();
    // eslint-disable-next-line
  }, []);

  return (
    orders && (
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
                <tbody>
                  {orders.map((order) => {
                    return (
                      <tr key={order.id}>
                        <td> {order.id}</td>
                        <td>
                          {order.details.firstname} {order.details.lastname}
                        </td>
                        <td>
                          {" "}
                          {order.products.reduce(
                            (acc, product) =>
                              acc + product.price * product.quantity,
                            0
                          )}{" "}
                          U$S
                        </td>
                        <td>
                          <i className="bi bi-box-seam me-2"></i>
                          {order.status}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {orders.length === 0 && (
                <div className="no-orders rounded mx-auto">
                  <h2 className="no-orders-title text-center">
                    There are no orders to display!
                  </h2>
                  <h2 className="no-orders-message text-center">
                    When available, you will find them here.
                  </h2>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    )
  );
}

export default AdminOrder;
