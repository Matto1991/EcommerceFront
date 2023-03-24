import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About.css";
import Footer from "./Footer";

export default function AboutProyect() {
  return (
    <>
      <Navbar />
      <div className="row hero-about">
        <div className="col-12 position-relative"></div>
      </div>

      <div className="container mt-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-12 col-md-6  col-xl-3 p-3  ">
              <div className="shadow card-container rounded">
                <div className="shape-team">
                  <div className="img-team-andy mx-auto"></div>
                </div>
                <h3 className="mt-3 fw-bold">Andrés Viera</h3>
                <h4 className="card-team-title"> Full Stack Developer Jr </h4>
                <br />
                <div className="icons-team">
                  <i className="bi bi-linkedin me-2"></i>
                  <i className="bi bi-github me-2"></i>
                  <i className="bi bi-envelope-fill "></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6  col-xl-3 p-3  ">
              <div className="shadow card-container rounded">
                <div className="shape-team">
                  <div className="img-team-andy mx-auto"></div>
                </div>
                <h3 className="mt-3 fw-bold">Andrés Viera</h3>
                <h4 className="card-team-title"> Full Stack Developer Jr </h4>
                <br />
                <div className="icons-team">
                  <i className="bi bi-linkedin me-2"></i>
                  <i className="bi bi-github me-2"></i>
                  <i className="bi bi-envelope-fill "></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6  col-xl-3 p-3 ">
              <div className="shadow card-container rounded">
                <div className="shape-team">
                  <div className="img-team-andy mx-auto"></div>
                </div>
                <h3 className="mt-3 fw-bold">Andrés Viera</h3>
                <h4 className="card-team-title"> Full Stack Developer Jr </h4>
                <br />
                <div className="icons-team">
                  <i className="bi bi-linkedin me-2"></i>
                  <i className="bi bi-github me-2"></i>
                  <i className="bi bi-envelope-fill "></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6  col-xl-3 p-3  ">
              <div className="shadow card-container rounded">
                <div className="shape-team">
                  <div className="img-team-andy mx-auto"></div>
                </div>
                <h3 className="mt-3 fw-bold">Andrés Viera</h3>
                <h4 className="card-team-title"> Full Stack Developer Jr </h4>
                <br />
                <div className="icons-team">
                  <i className="bi bi-linkedin me-2"></i>
                  <i className="bi bi-github me-2"></i>
                  <i className="bi bi-envelope-fill "></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
