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
  }, []);

  return (
    orders && (
      <div>
        <NavbarOther />
        <div className="d-flex header-order-purchase ">
          <section className="container">
            <h2 className="d-inline">Orders</h2>
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
                  {orders &&
                    orders.map((order) => {
                      return (
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
                                acc + product.price * product.quantity,
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
                      );
                    })}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    )
  );
}

export default UserOrders;
