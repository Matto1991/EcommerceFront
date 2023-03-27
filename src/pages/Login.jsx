import { Link } from "react-router-dom";
import React from "react";
import "./form.css";

function Login() {
  return (
    <div className="form-login">
      <div className="container sign-up p-5">
        <div className="row formulary p-3">
          <div className="message col-md-6 col-lg-6 text-center d-flex flex-column">
            <h2 className="h2-message">Welcome to Ecozy Luxury</h2>
            <p className="p-message">
              {" "}
              Don't have an account?
              <Link
                to="/sign-up"
                className="text-decoration-none fw-bold link-sign-up"
              >
                {" "}
                Sign up
              </Link>
            </p>
            {/* <button className="btn btn-lg btn-success sign-up-btn border-0">Sign Up</button> */}
          </div>
          <div className="col-md-5 col-lg-5">
            <form>
              <h2 className="create-account">Login</h2>

              <label htmlFor="email"></label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                className="input-tx"
              />

              <label htmlFor="password"></label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                className="input-tx"
              />
              <div className="icons">
                <div className="border-icon">
                  <i className="bi bi-instagram"></i>
                </div>
                <div className="border-icon">
                  <i className="bi bi-facebook"></i>
                </div>
                <div className="border-icon">
                  <i className="bi bi-linkedin"></i>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
