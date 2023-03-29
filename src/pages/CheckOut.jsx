import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../components/Footer";
import NavbarOther from "../components/NavbarOther";
import { removeFromCart } from "../redux/cartReducer";
import axios from "axios";

function CheckOut() {
  const products = useSelector((state) => state.cart.products);
  const token = useSelector((state) => state.session.token);

  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [payment_method, setPayment_method] = useState("");

  const dispatch = useDispatch();

  const handleRemoveProduct = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleCheckout = async () => {
    await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      url: `${process.env.REACT_APP_BACKEND_URL}/orders`,
      data: {
        products,
        details: {
          email,
          firstname,
          lastname,
          address,
          apartment,
          city,
          state,
          zipcode,
          payment_method,
        },
      },
    });
  };

  return (
    products && (
      <>
        <NavbarOther />
        <div className="container order-box">
          <div className="row p-5">
            <div className="col-md-6 ">
              <form className="form-control rounded p-2">
                <h3 className="mb-2">Contact information</h3>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="Email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <hr />

                <div className="mb-3">
                  <label className="form-label">Firstname</label>
                  <input
                    type="Text"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    placeholder="Firstname"
                    value={firstname}
                    onChange={(event) => setFirstname(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Lastname</label>
                  <input
                    type="Text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    placeholder="Lastname"
                    value={lastname}
                    onChange={(event) => setLastname(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="Text"
                    className="form-control"
                    id="address"
                    name="address"
                    placeholder="Address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Apartment, suite,etc</label>
                  <input
                    type="Text"
                    className="form-control"
                    id="apartment"
                    name="apartment"
                    placeholder="Apartment, suite,etc"
                    value={apartment}
                    onChange={(event) => setApartment(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">City</label>
                  <input
                    type="Text"
                    className="form-control"
                    id="city"
                    name="city"
                    placeholder="City"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">State</label>
                  <input
                    type="Text"
                    className="form-control"
                    id="state"
                    name="state"
                    placeholder="State"
                    value={state}
                    onChange={(event) => setState(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Zip code</label>
                  <input
                    type="Text"
                    className="form-control"
                    id="zipcode"
                    name="zipcode"
                    placeholder="Zip Code"
                    value={zipcode}
                    onChange={(event) => setZipcode(event.target.value)}
                  />
                </div>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={payment_method}
                  onChange={(event) => setPayment_method(event.target.value)}
                >
                  <FormControlLabel
                    value="creditCard"
                    control={<Radio />}
                    label="Credit card"
                    name="payment_method"
                    onChange={(event) => setPayment_method(event.target.value)}
                  />
                  <FormControlLabel
                    value="paypal"
                    control={<Radio />}
                    label="PayPal"
                    name="payment_method"
                    onChange={(event) => setPayment_method(event.target.value)}
                  />
                  <FormControlLabel
                    value="etransfer"
                    control={<Radio />}
                    label="eTransfer"
                    name="payment_method"
                    onChange={(event) => setPayment_method(event.target.value)}
                  />
                </RadioGroup>
              </form>
            </div>
            <div className="col-md-6 d-flex flex-column">
              <div
                className="form-control rounded overflow-auto"
                style={{ maxHeight: "500px" }}
              >
                <div>
                  <ul className="my-4 my-4 d-flex flex-column align-items-center">
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
                            <div className="border border-1 rounded mb-2">
                              <img
                                alt="img\TheLeroyChair.webp"
                                src={
                                  typeof product.images === "object"
                                    ? `${process.env.REACT_APP_BACKEND_URL}/${product.images[0]}`
                                    : `${process.env.REACT_APP_BACKEND_URL}/img/users/${product.images} `
                                }
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <div className=" d-flex justify-content-between mt-3 text-end ">
                            <div className="border rounded border-1 d-flex align-items-center">
                              <i
                                className=" btn border-0 bi bi-caret-left"
                                // onClick={() => handleDecreaseCart(product)}
                              ></i>{" "}
                              {product.quantity}
                              <i
                                className="btn border-0 bi bi-caret-right"
                                // onClick={() => handleIncrementCart(product)}
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
                </div>
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
                        U$S{" "}
                      </strong>
                    </p>
                  )}
                </div>
                <p className="mt-1 text-secondary-light">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6 d-grid gap-2">
                  <button
                    className="btn btn-success btn-lg green"
                    onClick={handleCheckout}
                  >
                    Confirm order
                  </button>
                </div>
                <div className="mt-5 d-flex justify-center text-center ">
                  <p>
                    <button type="button" className=" btn fw-bolder">
                      Continue Shopping <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  );
}

export default CheckOut;
