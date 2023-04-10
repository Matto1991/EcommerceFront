import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavbarHome from "../components/NavbarHome";
import NavbarOther from "../components/NavbarOther";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import Footer from "../components/Footer";

function UserOrderDetails() {
  const [orders, setOrders] = useState([]);
  const { id } = useParams();

  const token = useSelector((state) => state.session.token);

  useEffect(() => {
    const getOrderId = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "get",
        url: `${process.env.REACT_APP_BACKEND_URL}/orders/details/${id}`,
      });
      console.log(response.data);
      setOrders(response.data);
    };
    getOrderId();
  }, []);

  return (
    <>
      <NavbarOther />
      <div>
        <div className="container">
          <h2 className="text-center mt-5">Order number: {orders.id}</h2>
          <div className="table-responsive-orders-details">
            <table className="table table-striped table-hover border border rounded  mt-5">
              <thead>
                <tr>
                  <th className="text-center product-id title-table-details-order">
                    Product ID
                  </th>
                  <th className="text-center title-table-details-order">
                    Product
                  </th>
                  <th className="text-center title-table-details-order">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.products
                  ? orders.products.map((product) => (
                      <tr key={product.id}>
                        <td className="text-center single-row-order-details">
                          <p>{product.id}</p>
                        </td>
                        <td className="text-center single-row-order-details">
                          {" "}
                          <img
                            src={
                              typeof product.images === "object"
                                ? `${process.env.REACT_APP_BACKEND_URL}/${product.images[0]}`
                                : `${process.env.REACT_APP_BACKEND_URL}/img/users/${product.images}`
                            }
                            alt={`${product.name}`}
                            className="rounded img-table mt-3"
                          />
                        </td>
                        <td className="single-row-order-details">
                          <p>
                            <strong>{product.name}</strong>
                          </p>
                          <p>{product.description}</p>
                          <p>Quantity: {product.quantity}</p>
                          <p>Unit price: {product.price} US$</p>
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
            {orders && orders.products && orders.details && (
              <table className="table table-striped table-hover border border rounded  mt-5">
                <thead className="mt-5">
                  <tr>
                    <th className="text-center title-table-details-order">
                      Total paid
                    </th>
                    <th className="text-center title-table-details-order">
                      Customer information
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center single-row-order-details">
                      <p>
                        Total:{" "}
                        {orders.products.reduce(
                          (acc, product) =>
                            acc + product.price * product.quantity,
                          0
                        )}{" "}
                        US$
                      </p>
                      <p>
                        Method payment: {orders.details.payment_method}
                        <i className="bi bi-credit-card me-2 ms-2"></i>
                      </p>
                    </td>
                    <td className="text-center single-row-order-details">
                      <p>
                        {orders.details.firstname} {orders.details.lastname}
                      </p>
                      <p>
                        {orders.details.address}, Apartament:{" "}
                        {orders.details.apartment}
                      </p>
                      <p>
                        {orders.details.city} {orders.details.zipcode},{" "}
                        {orders.details.state}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserOrderDetails;
