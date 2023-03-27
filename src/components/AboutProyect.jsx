import React from "react";
import About from "../components/About.css";
import Footer from "./Footer";
import Navbar from "../components/Navbar";
export default function AboutProyect() {
  return (
    <>
      <Navbar />
      <div className="row hero-about">
        <div className="col-12 position-relative"></div>
      </div>

      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 ">
          <div className="col">
            <div className="card h-100 shadow">
              <span className="p-2 rounded icon-about">
                <i class="fs-5 bi bi-clock text-white"></i>
              </span>
              <div className="card-body mt-3">
                <h5 className="card-title">Duración</h5>
                <p className="card-text">
                  El proyecto fue desarrollado en tan sólo 3 semanas, durante
                  marzo de 2023. El mismo se dividió en demos de una semana de
                  duración.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow">
              <span className="p-2 rounded icon-about">
                <i class="fs-5 bi bi-code-square text-white"></i>
              </span>
              <div className="card-body mt-3">
                <h5 className="card-title">Tecnologías</h5>
                <p className="card-text">
                  Para el Front-End del sitio se desarrolló una aplicación en
                  React, mientras que para el Back-End se desarrolló una REST
                  API hecha con Node.js, Express, mySQL y Git/GitHub.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow">
              <span className="p-2 rounded icon-about">
                <i class=" fs-5 bi bi-list-ul text-white"></i>
              </span>
              <div className="card-body mt-3">
                <h5 className="card-title">División de tareas</h5>
                <p className="card-text">
                  Para la organización y planificación del proyecto se utilizó
                  Trello y Figma. Esto permitió que cada integrante del equipo
                  estuviese permanentemente al tanto del estado del proyecto así
                  como de las tareas que debía realizar.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="mx-auto mt-5">
          <h1 className="text-center mb-5 fw-bold">Equipo</h1>
          <div class="row g-2">
            <div class="col-md-6  col-lg-3">
              <div class="card border-0 p-3">
                <img
                  src="/img/team_Andres.png"
                  class="img-team-ali shadow mx-auto"
                  alt="..."
                />
                <div class="card-body text-center">
                  <h5 class="card-title">Andrés Viera</h5>
                  <p class="card-text fw-bold ">Full Stack Developer Jr.</p>
                </div>

                <div className="icons-team text-center">
                  <i className="bi bi-linkedin me-2"></i>
                  <i className="bi bi-github me-2"></i>
                  <i className="bi bi-envelope-fill "></i>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card border-0 p-3">
                <img
                  src="/img/VirginiaBarbaroimg.jpg"
                  class="img-team-ali shadow mx-auto"
                  alt="..."
                />
                <div class="card-body text-center">
                  <h5 class="card-title">Virginia Barbaro</h5>
                  <p class="card-text fw-bold ">Full Stack Developer Jr.</p>
                </div>

                <div className="icons-team text-center">
                  <i className="bi bi-linkedin me-2"></i>
                  <i className="bi bi-github me-2"></i>
                  <i className="bi bi-envelope-fill "></i>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card border-0 p-3">
                <img
                  src="/img/AlineFariasprueba.jpg"
                  class="img-team-ali shadow mx-auto"
                  alt="..."
                />
                <div class="card-body text-center">
                  <h5 class="card-title">Aline Farias</h5>
                  <p class="card-text fw-bold ">Full Stack Developer Jr.</p>
                </div>

                <div className="icons-team text-center">
                  <i className="bi bi-linkedin me-2"></i>
                  <i className="bi bi-github me-2"></i>
                  <i className="bi bi-envelope-fill "></i>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card border-0 p-3">
                <img
                  src="/img/Mathi.jpg"
                  class="img-team-ali shadow mx-auto"
                  alt="..."
                />
                <div class="card-body text-center">
                  <h5 class="card-title">Mathias Sandin</h5>
                  <p class="card-text fw-bold ">Full Stack Developer Jr.</p>
                </div>

                <div className="icons-team text-center">
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
        <div className="img-team-vir mx-auto"></div>
      </div>
      <h3 className="mt-3 fw-bold">Virginia Babaro</h3>
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
        <div className="img-team-ali mx-auto"></div>
      </div>
      <h3 className="mt-3 fw-bold">Aline Farias</h3>
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
        <div className="img-team-matto mx-auto"></div>
      </div>
      <h3 className="mt-3 fw-bold">Mathias Sandín</h3>
      <h4 className="card-team-title"> Full Stack Developer Jr </h4>
      <br />
      <div className="icons-team">
        <i className="bi bi-linkedin me-2"></i>
        <i className="bi bi-github me-2"></i>
        <i className="bi bi-envelope-fill "></i>
      </div>
    </div>
  </div>
</div>;
