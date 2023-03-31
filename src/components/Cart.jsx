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
  const user = useSelector((state) => state.session);

  const handleRemoveProduct = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleDecreaseCart = (product) => dispatch(decreaseCart(product));
  const handleIncrementCart = (product) => dispatch(increaseCart(product));

  const redirectTo = user && user.id ? "/checkout" : "/login";

  return (
    products && (
      <>
        <span
          onClick={handleShow}
          className="bi bi-bag cart-nav cart-bag-icon"
          onMouseEnter={(e) => {
            e.target.classList.remove("bi-bag");
            e.target.classList.add("bi-bag-fill");
          }}
          onMouseLeave={(e) => {
            e.target.classList.remove("bi-bag-fill");
            e.target.classList.add("bi-bag");
          }}
        >
          {name}
        </span>
        <small className="cart-product-number">
          {products.reduce((a, b) => Number(a) + Number(b.quantity), 0)}
        </small>

        <Offcanvas show={show} onHide={handleClose} placement={"end"}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="d-flex flex-column justify-content-between h-100">
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
                                className="cart-product-title text-decoration-none"
                              >
                                {product.name}
                              </Link>
                            </h4>
                            <small className="fw-2 cart-product-price">
                              US$ {product.price}
                            </small>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="border border-2 rounded mb-2">
                            <img
                              alt={product.name}
                              src={
                                typeof product.images === "object"
                                  ? `${process.env.REACT_APP_BACKEND_URL}/${product.images[0]}`
                                  : `${process.env.REACT_APP_BACKEND_URL}/img/users/${product.images} `
                              }
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mt-3 text-end ">
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
                          <p className="cart-product-subtotal">
                            subtotal: US$ {product.quantity * product.price}{" "}
                          </p>
                          <IconButton aria-label="delete" size="small">
                            <DeleteIcon
                              fontSize="small"
                              onClick={() => handleRemoveProduct(product)}
                            />
                          </IconButton>
                        </div>
                      </div>
                      <hr />
                    </li>
                  ))}
                </ul>
              </div>

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
                        US${" "}
                      </strong>
                    </p>
                  )}
                </div>
                <p className="mt-1 text-secondary-light">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6 d-grid gap-2">
                  <Link to={redirectTo} className="btn btn-lg cta-ck-btn">
                    Checkout
                  </Link>
                  <button className="btn fw-bolder" onClick={handleClose}>
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
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
