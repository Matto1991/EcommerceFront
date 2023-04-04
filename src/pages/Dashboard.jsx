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
        <div className="container">
          <main className="flex-grow-1">
            <section className="p-4">
              <h3>Dashboard</h3>
              <div className="row mt-5 row-cols-1 row-cols-lg-3 g-5 mb-5">
                <div className="card p-2 col">
                  <span className="p-2 rounded icon-dashboard-order">
                    <i className="bi bi-box2"></i>
                  </span>
                  <div className="card-dashboard mt-2">
                    <h5>Total orders</h5>
                    <h6>{orders.length}</h6>
                  </div>
                </div>
                <div className="card p-2 col">
                  <span className="p-2 rounded icon-dashboard-products">
                    <i className="bi bi-card-list"></i>
                  </span>
                  <div className="card-dashboard mt-2">
                    <h5>Total products</h5>
                    <h6>{products.length}</h6>
                  </div>
                </div>
                <div className="card p-2 col">
                  <span className="p-2 rounded icon-dashboard-sales">
                    <i className="bi bi-currency-dollar"></i>
                  </span>
                  <div className="card-dashboard mt-2">
                    <h5>Total sales</h5>
                    <h6>{`${total}`} US$</h6>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between pt-4">
                <h2 className="d-inline">Last 10 0rders</h2>
              </div>
              <div className="table-responsive text-center">
                <table className="table table-striped table-hover border border rounded shadow mt-5">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">User</th>
                      <th scope="col">Total Price</th>
                      <th scope="col">Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => {
                      return (
                        <tr key={order.id}>
                          <td> {order.id}</td>
                          <td>{order.details.firstname} {order.details.lastname}</td>
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
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
