import React from "react";
import About from "../components/About.css";
import Footer from "./Footer";

export default function AboutProyect() {
  return (
    <>
      
      <div className="row hero-about">
        <div className="col-12 position-relative"></div>
      </div>

      <div className="container mt-5">
       
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 ">
  <div className="col">
    <div className="card h-100 shadow">
    <span className="p-2 rounded icon-about"><i class="fs-5 bi bi-clock text-white"></i></span>
      <div className="card-body mt-3">
        <h5 className="card-title">Duración</h5>
        <p className="card-text">El proyecto fue desarrollado en tan sólo 3 semanas, durante marzo de 2023. El mismo se dividió en sprints (Scrum) de una semana de duración.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 shadow">
      
    <span className="p-2 rounded icon-about"><i class="fs-5 bi bi-code-square text-white"></i></span>
      <div className="card-body mt-3">
        <h5 className="card-title">Tecnologías</h5>
        <p className="card-text">Para el Front-End del sitio se desarrolló una aplicación en React (usando Create-React-App) mientras que para el Back-End se desarrolló una REST API hecha con Node.js, Express, SQL y Git/GitHub.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 shadow">
      
    <span className="p-2 rounded icon-about"><i class=" fs-5 bi bi-list-ul text-white"></i></span>
      <div className="card-body mt-3">
        <h5 className="card-title">División de tareas</h5>
        <p className="card-text">Para la organización y planificación del proyecto se utilizó Trello y Figma. Esto permitió que cada integrante del equipo estuviese permanentemente al tanto del estado del proyecto así como de las tareas que debía realizar.</p>
      </div>
    </div>
  </div>
</div>

<div>
  <h2>Equipo:</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta inventore eius obcaecati optio nemo officia minima aliquam vero ratione illum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, inventore?</p>
</div>

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
          </div>
        
      </div>
      <Footer />
    </>
  );
}
