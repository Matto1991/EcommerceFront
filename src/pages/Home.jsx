import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="row hero-image">
        <div className="col-12">
          <div className="col-6 d-flex flex-column justify-content-center ms-5 h-100 w-50 ">
            <h1 className="display-3 fw-bold">Lorem ipsum </h1>
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
          </div>
        </div>
      </div>
    </>
  );
}
