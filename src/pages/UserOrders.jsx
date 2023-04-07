import React, { useEffect, useState } from "react";

import axios from "axios";
import { useSelector } from "react-redux";

import NavbarOther from "../components/NavbarOther";

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
                    <th scope="col">Id</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {console.log(orders)}
                  {orders &&
                    orders.map((order) => {
                      return (
                        <tr key={order.id}>
                          <td> {order.id}</td>
                          <td>{order.createdAt}</td>
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
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            {/* 
            <div className="order-placed d-flex justify-content-between">
              <h3>Order</h3>
              
            </div>
            <div className="table-responsive ">
              <table className="table table-striped table-hover border border rounded  mt-5">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Details</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                {orders.map((order) => {
                  return (
                    <tbody key={order.products.id}>
                      <tr>
                        <th>
                          {" "}
                          <img
                            src={
                              typeof order.products.images === "object"
                                ? `${process.env.REACT_APP_BACKEND_URL}/${order.products.images[0]}`
                                : `${process.env.REACT_APP_BACKEND_URL}/img/users/${order.products.images}`
                            }
                            alt={`${order.products.name}`}
                            className="rounded img-table"
                          />{" "}
                        </th>
                        <td>
                          {" "}
                          <strong>{order.products.name} </strong>
                          <br /> <p>{order.products.description}</p>
                          US$ {order.products.price * order.products.quantity}
                        </td>
                        <td className="text-center">
                          <strong>{order.products.quantity} </strong>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div> */}

            {/* <table className="table table-striped table-hover border border rounded  mt-5">
              <thead>
                <tr>
                  <th>Adress</th>
                  <th>Costumers</th>
                  <th>Payment</th>
                  <th className="text-end">Total</th>
                </tr>
              </thead>
              {orders.map((order) => {
                return (
                  <tbody>
                    <tr>
                      <td>
                        <ul className="list-group text-start list-unstyled">
                          <li>{order.details.address}</li>
                          <li>Apartment {order.details.apartment}</li>
                          <li>
                            {order.details.city} {order.details.zipcode}
                          </li>
                          <li>{order.details.state}</li>
                        </ul>
                      </td>
                      <td>
                        {order.details.firstname} {order.details.lastname}
                        <br />
                        {order.details.email}
                      </td>
                      <td>{order.details.payment_method}</td>
                      <td>
                        <ul className="list-group text-end list-unstyled">
                          <li>Shipping US$ 0 </li>
                          <li>Tax US$ 0</li>
                          <li>
                            Total products:{" "}
                            {order.products.reduce(
                              (a, b) => Number(a) + Number(b.quantity),
                              0
                            )}
                          </li>
                          <li>
                            Total:{" "}
                            <strong>
                              {" "}
                              US${" "}
                              {order.products.reduce(
                                (acc, product) =>
                                  acc + product.price * product.quantity,
                                0
                              )}{" "}
                            </strong>{" "}
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table> */}
          </section>
        </div>
      </div>
    )
  );
}

export default UserOrders;
