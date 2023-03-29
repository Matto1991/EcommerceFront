import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import {
  decreaseCart,
  removeFromCart,
  increaseCart,
} from "../redux/cartReducer";
import "./Cart.css";
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

  const handleDecreaseCart = (product) => dispatch(decreaseCart(product));
  const handleIncrementCart = (product) => dispatch(increaseCart(product));

  return (
    products && (
      <>
        <span
          onClick={handleShow}
          className="ms-auto bi bi-bag cart-nav position-relative"
        >
          {name}
        </span>
        <small className="cart-product-number"> {products.length}</small>

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
                            <i
                              className="btn border-0 bi bi-caret-left"
                              onClick={() => handleDecreaseCart(product)}
                            ></i>{" "}
                            {product.quantity}
                            <i
                              className="btn border-0 bi bi-caret-right"
                              onClick={() => handleIncrementCart(product)}
                            ></i>
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
                  <div className="d-flex justify-content-end mt-4 ">
                    {products.length > 0 && (
                      <p>
                        Total:{" "}
                        <strong>
                          {" "}
                          {products.reduce(
                            (acc, product) =>
                              acc + product.price * product.quantity,
                            0
                          )}{" "}
                          U$S{" "}
                        </strong>
                      </p>
                    )}
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
    )
  );
}

export default Cart;
