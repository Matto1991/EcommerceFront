import React, { useEffect, useState } from "react";

import axios from "axios";
import { useSelector } from "react-redux";

import AdminDash from "../components/AdminDash";
import NavbarAdmin from "../components/NavbarAdmin";

function Dashboard() {
  const user = useSelector((state) => state.session);

  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

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
      console.log(response.data);
    };
    getOrders();
  }, []);

  const total = orders.reduce((accumulator, order) => {
    return (
      accumulator +
      order.products.reduce((acc, product) => {
        return acc + product.quantity * product.price;
      }, 0)
    );
  }, 0);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: "get",
        url: `${process.env.REACT_APP_BACKEND_URL}/products`,
      });
      setProducts(response.data);
    };
    getProducts();
  }, []);

  return (
    <>
      <NavbarAdmin />
      <div className="d-flex">
        <AdminDash />
        <div className="container p-4">
          <h2 className="admin-section-title">Dashboard</h2>

          <div className="dashbord-cards-container row g-3 my-5 mx-auto">
            <div className="col col-md-4 col-lg-4 ">
              <div className=" card shadow d-flex flex-row justify-content-center p-4">
                <div className="me-4">
                  <span className="p-2 rounded icon-dashboard-order ">
                    <i className="bi bi-box2 fs-3"></i>
                  </span>{" "}
                </div>
                <div className="text-center">
                  <h3>Total orders</h3>
                  <div className="d-flex justify-content-evenly">
                    <h5>{orders.length + 1} </h5>
                    <span className="text-success ">
                      <i className="bi bi-arrow-up "> </i> 11%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col-md-4 col-lg-4">
              <div className="card shadow d-flex flex-row justify-content-center p-4">
                <div className="me-4">
                  <span className="p-2 rounded icon-dashboard-products ">
                    <i className="bi bi-card-list fs-3"></i>
                  </span>{" "}
                </div>
                <div className="text-center">
                  <h3>Total products</h3>
                  <div className="d-flex justify-content-evenly">
                    <h5>{products.length}</h5>
                    <span className="text-success ">
                      <i className="bi bi-arrow-up "> </i> 16%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col-md-4 col-lg-4">
              <div className="card shadow d-flex flex-row justify-content-center p-4">
                <div className="me-4">
                  <span className="p-2 rounded icon-dashboard-sales ">
                    <i className="bi bi-currency-dollar fs-3"></i>
                  </span>{" "}
                </div>
                <div className="text-center">
                  <h3>Total sales</h3>
                  <div className="d-flex justify-content-evenly">
                    <h5>{`${total}`} US$</h5>
                    <span className="text-danger ">
                      <i className="bi bi-arrow-down "> </i> 3%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="admin-last-orders-section d-flex justify-content-between">
            <h2 className="admin-section-title">Last Orders</h2>
          </div>
          <div className="table-responsive text-center">
            <table className="table table-striped table-hover border border rounded shadow mt-4">
              <thead>
                <tr className="table-columns">
                  <th>Id</th>
                  <th>User</th>
                  <th>Total Price</th>
                  <th>Options</th>
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
                        US$
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
                <h2 className="no-orders-title">
                  There are no orders to display!
                </h2>
                <h2 className="no-orders-message">
                  When available, you will find them here.
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
