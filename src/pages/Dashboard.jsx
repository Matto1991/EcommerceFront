import React, { useEffect, useState } from "react";

import axios from "axios";
import { useSelector } from "react-redux";

import AdminDash from "../components/AdminDash";
import NavbarAdmin from "../components/NavbarAdmin";

function Dashboard() {
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
      setOrders(response.data.splice(0, 10));
    };

    getOrders();
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
              <div className="row">
                <div className="">CARDS</div>
              </div>
              <div className="d-flex justify-content-between pt-4">
                <h2 className="d-inline">Last 10 0rders</h2>
              </div>
              <div className="table-responsive text-center">
                <table className="table table-striped table-hover border border rounded shadow mt-5">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">UserID</th>
                      <th scope="col">Total Price</th>
                      <th scope="col">Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => {
                      return (
                        <tr key={order.id}>
                          <td> {order.id}</td>
                          <td>{order.details.firstname}</td>
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
