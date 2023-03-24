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
        {/*       
        <div className="row">
          <div className="col-3 col-sm-6 col-md-4 col-lg-3 p-3  mt-5 mb-5">
            <div class="card">
              <div className="rounded small-box"></div>
              <div class="card-body m-3">
                <div className="icon"> </div>
                <h5 class="card-title">Duración</h5>
                <p class="card-text">
                  El proyecto fue desarrollado en tan sólo 3 semanas, durante
                  noviembre de 2022. El mismo se dividió en sprints (Scrum) de
                  una semana de duración.
                </p>
              </div>
            </div>
          </div>
          <div className="col-3 col-sm-6 col-md-4 col-lg-3 p-3  mt-5 mb-5">
            <div class="card">
              <div className="rounded small-box"></div>
              <div class="card-body m-3">
                <div className="icon"> </div>
                <h5 class="card-title">Tecnologías</h5>
                <p class="card-text">
                  Para el Front-End del sitio se desarrolló una aplicación en
                  React (usando Create-React-App) mientras que para el Back-End
                  se desarrolló una REST API hecha con Node.js, Express, SQL y
                  Git/GitHub
                </p>
              </div>
            </div>
          </div>
          <div className="col-3 col-sm-6 col-md-4 col-lg-3 p-3  mt-5 mb-5">
            <div class="card">
              <div className="rounded small-box"></div>
              <div class="card-body m-3">
                <div className="icon"> </div>
                <h5 class="card-title">División de tareas</h5>
                <p class="card-text">
                  Para la organización de tareas durante el proyecto se utilizó
                  Trello y Figma. Esto permitió que cada integrante del equipo
                  estuviese permanentemente al tanto del estado del proyecto así
                  como de las tareas que debía realizar.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div class="container">
          <div class="row  d-flex justify-content-around">
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 p-3 shadow card-container rounded mt-5 mb-5">
              <div class="shape-team">
                <div class="img-team-andy"></div>
              </div>
              <h3 class="mt-3 fw-bold">Andrés Viera</h3>
              <h4 class="card-team-title"> Full Stack Developer Jr </h4>
              <br />
              <div class="icons-team">
                <i class="bi bi-linkedin me-2"></i>
                <i class="bi bi-github me-2"></i>
                <i class="bi bi-envelope-fill "></i>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 p-3 shadow card-container rounded mt-5 mb-5">
              <div class="shape-team">
                <div class="img-team-vir"></div>
              </div>
              <h3 class="mt-3 fw-bold">Virginia Barbaro</h3>
              <h4 class="card-team-title"> Full Stack Developer Jr </h4>
              <br />
              <div class="icons-team">
                <i class="bi bi-linkedin me-2"></i>
                <i class="bi bi-github me-2"></i>
                <i class="bi bi-envelope-fill "></i>
              </div>
            </div>

            <div class="col-6 col-sm-6 col-md-4 col-lg-3 p-3 shadow card-container rounded mt-5 mb-5">
              <div class="shape-team">
                <div class="img-team-ali"></div>
              </div>
              <h3 class="mt-3 fw-bold">Aline Farias</h3>
              <h4 class="card-team-title"> Full Stack Developer Jr </h4>
              <br />
              <div class="icons-team">
                <i class="bi bi-linkedin me-2"></i>
                <i class="bi bi-github me-2"></i>
                <i class="bi bi-envelope-fill "></i>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 p-3 shadow card-container rounded mt-5 mb-5">
              <div class="shape-team">
                <div class="img-team-ali"></div>
              </div>
              <h3 class="mt-3 fw-bold">Aline Farias</h3>
              <h4 class="card-team-title"> Full Stack Developer Jr </h4>
              <br />
              <div class="icons-team">
                <i class="bi bi-linkedin me-2"></i>
                <i class="bi bi-github me-2"></i>
                <i class="bi bi-envelope-fill "></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
