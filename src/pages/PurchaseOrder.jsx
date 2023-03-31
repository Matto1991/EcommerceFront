import React, { useEffect, useState } from "react";
import NavbarOther from "../components/NavbarOther";
import "./purchaseOrder.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function PurchaseOrder() {
  const location = useLocation();
  console.log(location.state);

  const user = useSelector((state) => state.session);
  console.log(user);

  const [currentOrders, setCurrentOrders] = useState([]);

  useEffect(() => {
    const getOrder = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/orders/${user}`,
      });
      setCurrentOrders(response.data);
      console.log(currentOrders);
      console.log(response.data);
      //   console.log(response.data.)
      //   console.log(response.data.details)
    };
    getOrder();
  }, []);

  return (
    <>
      <NavbarOther />
      <div className="container">
        <div className="header-order-purchase">
          <p>Payment successful</p>
          <h3>Thanks for ordering</h3>
          <p>
            We appreciate your order, we are currently processing it! Hold on
            and we will send you confirmation very soon!
          </p>
        </div>
        <div className="order-placed d-flex justify-content-between">
          <h3>Order</h3>
          <p>Order placed: </p>
        </div>
        <div className="row">
          <ul>
            {/* {currentOrders.map((order) => { */}
              <li>
                <div className="col-2">
                  <img src="" alt="" />
                </div>
                <div className="col-6">
                  <p></p>
                </div>
                <div className="col-2"></div>
                <div className="col-2"></div>
              </li>;
            {/* })} */}
          </ul>
        </div>
        <div className="status-purchase-order"></div>
        <div className="payment-order-info"></div>
      </div>
    </>
  );
}

export default PurchaseOrder;
