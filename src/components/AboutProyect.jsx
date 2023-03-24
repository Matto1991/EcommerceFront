import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About.css";

export default function AboutProyect() {
  return (
    <>
      <Navbar />
      <div className="row hero-about">
        <div className="col-12 position-relative">
          <div className="hero-text"></div>
        </div>
      </div>

      <div className="container">
        <div className="col-4 m-3">
          <div class="card">
            <div class="card-body">
              <img src="img/AlineFarias.jpg" className="card-img" alt="ali" />
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p>REDES</p>
            </div>
          </div>
          <div className="col-4 border border-3">
            <img src="img/AlineFarias.jpg" className="w-100 team" alt="ali" />
            <div className="d-flex "></div>
            <h3>Aline Farias</h3>
            <h5>Full Stack Developer Jr</h5>
          </div>
        </div>
      </div>
    </>
  );
}
