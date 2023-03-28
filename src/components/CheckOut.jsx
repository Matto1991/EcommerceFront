import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

import DeleteIcon from "@mui/icons-material/Delete";

function CheckOut() {
  return (
    <>
      <div className="container">
        <div className="row">
          <form className="col-6">
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="Email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
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
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Postal code</label>
              <input
                type="Text"
                className="form-control"
                id="postalCode"
                name="postalCod"
                placeholder="Postal Code"
              />
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Credit card"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="PayPal"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="eTransfer"
              />
            </RadioGroup>
          </form>
          <div className="col-6">
            <div className="mt-8">
              <div>
                <ul className="my-4">
                  {/* {products.map((product, index) => ( */}
                  <div className="list-unstyled">
                    <div className="row">
                      <div className="col-8">
                        <div className="fs-5">
                          <h4>
                            <Link
                              to="/product/:name"
                              className="brown text-decoration-none"
                            >
                              product.name
                            </Link>
                          </h4>
                          <small className="fw-2 ">$ product.price</small>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="border border-2 rounded mb-2">
                          <img
                            alt="img\TheLeroyChair.webp"
                            // src={`${process.env.REACT_APP_BACKEND_URL}/${product.images[0]}`}
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className=" d-flex justify-content-between mt-3 text-end ">
                        <div className="border rounded border-1 d-flex align-items-center">
                          <i class=" btn border-0 bi bi-caret-left"></i>{" "}
                          product.quantity
                          <i class="btn border-0 bi bi-caret-right"></i>
                        </div>

                        <IconButton aria-label="delete" size="small">
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </div>
                    </div>
                    <hr />
                  </div>
                  {/* ))} */}
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
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
