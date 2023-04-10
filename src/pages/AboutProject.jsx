import React from "react";
import "../pages/about.css";
import Footer from "../components/Footer";
import NavbarOther from "../components/NavbarOther";

import "../pages/form.css";
import Information from "../components/Information";
import { Link } from "react-router-dom";

export default function AboutProyect() {
  return (
    <>
      <NavbarOther />
      <div className="container about-project-section">
        <div className="d-flex flex-column align-items-center mb-5">
          <h1 className="about-project-title mb-4">Sobre el proyecto</h1>
          <p>
            El presente sitio de e-commerce es un proyecto desarrollado por
            estudiantes del coding bootcamp de Hack Academy.
          </p>
        </div>
        <div className="row row-cols-1 row-cols-lg-3 g-5 mb-5 mt-4">
          <div className="col">
            <div className="card about-project-card shadow">
              <span className="p-2 rounded icon-about">
                <i className="fs-5 bi bi-clock text-white"></i>
              </span>
              <div className="card-body mt-3 text-center d-flex flex-column align-items-center">
                <h5 className="card-about-title mb-0">Duración</h5>
                <hr className="card-about-separator" />
                <p className="card-about-text">
                  Este proyecto se llevó a cabo en un período de{" "}
                  <strong>tres semanas (9 horas diarias aprox.)</strong>, en
                  marzo de 2023. Durante el proyecto el equipo se enfocó en
                  generar una compañía falsa y construir el sitio web de la
                  misma aplicando los conocimientos aprendidos previamente.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow">
              <span className="p-2 rounded icon-about">
                <i className="fs-5 bi bi-code-square text-white"></i>
              </span>
              <div className="card-body mt-3 text-center d-flex flex-column align-items-center">
                <h5 className="card-about-title mb-0">Tecnologías</h5>
                <hr className="card-about-separator" />
                <p className="card-about-text">
                  Para realizar este proyecto desarrollamos una{" "}
                  <strong> REST API</strong>. En el back-end utilizamos{" "}
                  <strong>Node.js, Sequalize, Express, mySQL </strong> y{" "}
                  <strong> Table plus</strong> como herramienta de gestión de
                  base de datos. El front-end lo trabajamos con{" "}
                  <strong>React, Redux, React Boostrap </strong> y{" "}
                  <strong> Boostrap </strong>. Finalmente, para administrar y
                  alojar nuestros archivos utilizamos <strong>Git</strong>,{" "}
                  <strong>GitHub,</strong> <strong>Vercel </strong> y
                  <strong> Supabase</strong>.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow">
              <span className="p-2 rounded icon-about">
                <i className=" fs-5 bi bi-list-ul text-white"></i>
              </span>
              <div className="card-body mt-3 text-center d-flex flex-column align-items-center">
                <h5 className="card-about-title mb-0">División de tareas</h5>
                <hr className="card-about-separator" />
                <p className="card-about-text">
                  Se utilizó <strong>Trello y Figma </strong> para la gestión y
                  organización del trabajo en equipo. Manteniendo en todo
                  momento una <strong> comunicación fluida y constante </strong>{" "}
                  , así como el <strong>seguimiento y control</strong> de las
                  tareas a realizar en cada fase del proyecto, estando éstas
                  comprendidas en una metodología de entrega basada en
                  demonstraciones semanales.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto about-project-team-section">
          <h2 className="text-center mb-5 about-project-section-title">
            Equipo
          </h2>
          <div className="row g-2">
            {/* ----------------------andy----------------------- */}
            <div className="col-md-6  col-lg-3">
              <div className="card border-0 p-3">
                <img
                  src="/img/team_Andres.png"
                  className="img-team shadow mx-auto"
                  alt="Andres Viera"
                />
                <div className="card-body text-center">
                  <h3 className="card-title card-team-title">ANDRES VIERA</h3>

                  <div className="icons-team d-flex justify-content-center">
                    <Link
                      to={"https://www.linkedin.com/in/andr%C3%A9s-viera"}
                      target="_blank"
                    >
                      <i className="bi bi-linkedin me-2"></i>
                    </Link>

                    <Link to={"https://github.com/andy-viera"} target="_blank">
                      <i className="bi bi-github me-2"></i>
                    </Link>

                    <Link
                      to={"mailto:andivie12@gmail.com?subject=&body="}
                      target="_blank"
                    >
                      <i className="bi bi-envelope-fill "></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ----------------------vir----------------------- */}
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 p-3">
                <img
                  src="/img/VirV.jpg"
                  className="img-team shadow mx-auto"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h3 className="card-title card-team-title">
                    VIRGINIA BARBARO
                  </h3>
                  <div className="icons-team d-flex justify-content-center">
                    <Link
                      to={"https://www.linkedin.com/in/virginia-barbaro/"}
                      target="_blank"
                    >
                      <i className="bi bi-linkedin me-2"></i>
                    </Link>
                    <Link
                      to={"https://github.com/VirginiaBarbaro"}
                      target="_blank"
                    >
                      <i className="bi bi-github me-2"></i>
                    </Link>
                    <Link
                      to={
                        "mailto:virginiabarbaro@icloud.com?subject=&body=Hola,%20quiero%20contactarte"
                      }
                      target="_blank"
                    >
                      <i className="bi bi-envelope-fill "></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* ----------------------ali----------------------- */}
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 p-3">
                <img
                  src="/img/AlineFariasprueba.jpg"
                  className="img-team shadow mx-auto"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h3 className="card-title card-team-title">ALINE FARIAS</h3>
                  <div className="icons-team d-flex justify-content-center">
                    <Link
                      to={"https://www.linkedin.com/in/aline-farias-111035268/"}
                      target="_blank"
                    >
                      <i className="bi bi-linkedin me-2 icons-h"></i>
                    </Link>
                    <Link to={"https://github.com/aliifm"} target="_blank">
                      <i className="bi bi-github me-2 icons-h"></i>
                    </Link>
                    <Link
                      to={
                        "mailto:Aline.farias.dev@gmail.com?subject==Hola,%20quiero%20contactarte"
                      }
                      target="_blank"
                    >
                      <i className="bi bi-envelope-fill icons-h"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* ----------------------mathi----------------------- */}
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 p-3">
                <img
                  src="/img/Mathi.jpg"
                  className="img-team-matto shadow mx-auto"
                  alt="Mathias Sandin"
                />
                <div className="card-body text-center">
                  <h3 className="card-title card-team-title">MATHIAS SANDIN</h3>
                  <div className="icons-team d-flex justify-content-center">
                    <Link
                      to={"https://www.linkedin.com/in/mathias-sandin/"}
                      target="_blank"
                    >
                      <i className="bi bi-linkedin me-2"></i>
                    </Link>
                    <Link
                      to={"https://github.com/Matto1991?tab=repositories"}
                      target="_blank"
                    >
                      <i className="bi bi-github me-2"></i>
                    </Link>
                    <Link
                      to={
                        "mailto:matto.sandin.1991@gmail.com?subject=&body=Hola,%20quiero%20contactarte"
                      }
                      target="_blank"
                    >
                      <i className="bi bi-envelope-fill "></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-50 mx-auto about-project-quote-section">
            <div className="card shadow">
              <div className="card-body mt-3 text-center">
                <p className="quote-section-text">
                  “The only way to do great work is to love what you do”
                </p>

                <p className="card-text text-end quote-section-text-author">
                  Steve Jobs
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 text-center">
            <hr />
            <h2 className="mt-5 mb-4 fw-bold">Tecnologías </h2>
            <img
              src="/img/Tecnologias(1).png"
              alt="tecnologias"
              className="w-75 p-4"
            />
          </div>
          <div className="text-center">
            <img src="/img/ha_logo.svg" alt="Hack Academy" className="ha-img" />
          </div>
        </div>
      </div>
      <Information />
      <Footer />
    </>
  );
}
