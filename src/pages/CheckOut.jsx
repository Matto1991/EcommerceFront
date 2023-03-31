import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../components/Footer";
import NavbarOther from "../components/NavbarOther";
import { removeFromCart } from "../redux/cartReducer";
import axios from "axios";
import "./checkout.css";

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
  const navigate = useNavigate();

  const handleRemoveProduct = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleCheckout = async () => {
    const response = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BACKEND_URL}/orders`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
    if (response) navigate("/thanks", { state: response.data });
  };

  return (
    products && (
      <>
        <NavbarOther />
        <div className="container order-box">
          <div className="row p-3 h-100 border rounded ">
            <div className="col-md-6 ">
              <form className="form-control border-0 rounded p-2">
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
                <div className="d-flex ">
                  <div className="mb-3 w-50 me-3">
                    <label className="form-label">Firstname</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Firstname"
                      name="firstname"
                      id="firstname"
                      value={firstname}
                      onChange={(event) => setFirstname(event.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3 w-50">
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
                <div className="d-flex ">
                  <div className="mb-3 me-3">
                    <label className="form-label">Apartment</label>
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
                </div>
                <div className="d-flex ">
                  <div className="mb-3 me-3">
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
                </div>
                <h5 className="text-center m-3">Payment method</h5>
                <RadioGroup
                  className="d-flex justify-content-evenly"
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
              <div></div>
            </div>
            <div className="col-md-6 d-flex flex-column h-100">
              <div
                className="form-control border-0 rounded overflow-auto"
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
                            <div className="mb-2">
                              <img
                                alt="img\TheLeroyChair.webp"
                                src={
                                  typeof product.images === "object"
                                    ? `${process.env.REACT_APP_BACKEND_URL}/${product.images[0]}`
                                    : `${process.env.REACT_APP_BACKEND_URL}/img/users/${product.images} `
                                }
                                className="img-fluid border border-1 rounded"
                              />
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p>Qty: {product.quantity}</p>

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
              </div>
              <div className="py-6 px-4 ">
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
                <div className="mt-6 d-grid gap-2 text-center">
                  <button
                    className="btn cta-co-btn w-100"
                    onClick={handleCheckout}
                  >
                    Confirm order
                  </button>
                </div>
                <div className="mt-5 text-center">
                  <Link to={"/"}>
                    <p>
                      <button type="button" className=" btn fw-bolder">
                        Continue Shopping{" "}
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </Link>
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
