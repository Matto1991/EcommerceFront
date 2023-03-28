import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { decreaseCart, removeFromCart } from "../redux/cartReducer";
import Cartc from "./Cartc.css";
import IconButton from "@mui/material/IconButton";

import DeleteIcon from "@mui/icons-material/Delete";

function Cart({ name }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart.products);

  const handleRemoveProduct = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleDecreaseCart = (product) => 
  dispatch(decreaseCart(product))

  return (
    <>
      <span
        onClick={handleShow}
        className=" ms-auto me-2 bi bi-bag-fill cart-nav position-relative"
      >
        {name}
      </span>

      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mt-8">
            <div>
              <ul className="my-4">
                {products.map((product, index) => (
                  <li key={index} className="list-unstyled">
                    <div className="row">
                      <div className="col-8">
                        <div className="fs-5">
                          <h4>
                            <Link
                              to="/product/:name"
                              className="brown text-decoration-none"
                            >
                              {product.name}
                            </Link>
                          </h4>
                          <small className="fw-2 ">$ {product.price}</small>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="border border-2 rounded mb-2">
                          <img
                            alt="img\TheLeroyChair.webp"
                            src={`${process.env.REACT_APP_BACKEND_URL}/${product.images[0]}`}
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className=" d-flex justify-content-between mt-3 text-end ">
                        <div className="border rounded border-1 d-flex align-items-center">
                          <i class=" btn border-0 bi bi-caret-left" onClick={() => handleDecreaseCart(product)}></i>{" "}
                          {product.quantity}
                          <i class="btn border-0 bi bi-caret-right"></i>
                        </div>

                        <IconButton aria-label="delete" size="small">
                          <DeleteIcon
                            fontSize="small"
                            // className="brown"
                            onClick={() => handleRemoveProduct(product)}
                          />
                        </IconButton>
                      </div>
                    </div>
                    <hr />
                  </li>
                ))}
              </ul>
              <div className="border-top  py-6 px-4 ">
                <div className="d-flex justify-between fw-bolder mt-4 ">
                  <p>Subtotal</p>
                  <p>$ 262.00</p>
                </div>
                <p className="mt-1 text-secondary-light">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6 d-grid gap-2">
                  <Link to="/login" className="btn btn-success btn-lg green">
                    Checkout
                  </Link>
                </div>
                <div className="mt-5 d-flex justify-center text-center ">
                  <p>
                    <button type="button" className=" btn fw-bolder">
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
