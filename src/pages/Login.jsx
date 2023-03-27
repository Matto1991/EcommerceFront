import React from "react";
import "./form.css"

function Login() {
  return (
    <div>
      <div className="container-form sign-up">
        <div className="message">
          <h2>Welcome to Ecozy Luxury</h2>
          <p> Don't have an account? Sign up</p>
          <button className="sign-in-btn">Sign Up</button>
        </div>
        <form className="formulary">
          <h2 className="create-account">Login with your credentials</h2>
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
          <p className="free-account">Create a free account to shopping</p>

          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" name="email" id="email" />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
