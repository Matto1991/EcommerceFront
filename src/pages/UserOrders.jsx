import React, { useEffect, useState } from "react";

import { format } from "date-fns";

import axios from "axios";
import { useSelector } from "react-redux";

import NavbarOther from "../components/NavbarOther";
import { Link } from "react-router-dom";

function UserOrders() {
  const token = useSelector((state) => state.session.token);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/orders/${token.id}`,
      });
      setOrders(response.data);
    };
    getOrders();
    // eslint-disable-next-line
  }, []);

  return (
    orders && (
      <div>
        <NavbarOther />
        <div className="d-flex header-order-purchase">
          <section className="container">
            <h2 className="d-inline orders-title">Your orders</h2>
            <div className="table-responsive">
              <table className="table table-striped table-hover border border rounded shadow mt-5">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total Price</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.length > 0 &&
                    orders.map((order) => (
                      <tr key={order.id}>
                        <td> {order.id}</td>
                        <td>
                          {format(new Date(order.createdAt), "dd-MM-yyyy")}
                        </td>
                        <td>
                          <i className="bi bi-box-seam me-2"></i>
                          {order.status}
                        </td>
                        <td>
                          {" "}
                          {order.products.reduce(
                            (acc, product) =>
                              acc + product.price * product.quantity + 13,
                            0
                          )}{" "}
                          U$S
                        </td>
                        <td>
                          <Link
                            to={`/orders/details/${order.id}`}
                            className="text-decoration-none brown"
                          >
                            {" "}
                            More
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {orders.length === 0 && (
                <div className="no-orders rounded mx-auto">
                  <h2 className="no-orders-title text-center">
                    You haven't ordered anything yet!
                  </h2>
                  <h2 className="no-orders-message text-center">
                    When available, you will your orders here.
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

export default UserOrders;
