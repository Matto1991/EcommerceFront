import React from "react";

function SingUp() {
  return (
    <div>
      <div className="container-form sign-up">
        <div className="message">
          <h2>Welcome to Ecozy Luxury</h2>
          <p> Already have an account? Sign in</p>
          <button className="sign-up-btn">Login</button>
        </div>
        <form className="formulary">
          <h2 className="create-account">Create an account</h2>
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
            <label htmlFor="firstname">Firstname</label>
            <input type="text" placeholder="Firstname" name="firstname" id="firstname" />

            <label htmlFor="lastname">Lastname</label>
            <input type="text" placeholder="Lastname" name="lastname" id="lastname" />

            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" name="email" id="email" />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" name="password" id="password" />

            <label htmlFor="avatar">Image</label>
            <input type="file" placeholder="Image" name="avatar" id="avatar" />
        </form>
      </div>
    </div>
  );
}

export default SingUp;
