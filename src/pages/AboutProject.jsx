import React from "react";
import "../pages/about.css";
import Footer from "../components/Footer";
import NavbarOther from "../components/NavbarOther";

import "../pages/form.css";
import Information from "../components/Information";

export default function AboutProyect() {
  return (
    <>
      <NavbarOther />
      <div className="hero-about">
        <div className=""></div>
      </div>

      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-lg-3 g-5 mb-5 ">
          <div className="col">
            <div className="card h-100 shadow">
              <span className="p-2 rounded icon-about">
                <i className="fs-5 bi bi-clock text-white"></i>
              </span>
              <div className="card-body mt-3">
                <h5 className="card-title">Duración</h5>
                <p className="card-about fs-5">
                  Este proyecto se llevó a cabo en un período de{" "}
                  <strong>tres semanas (9+ horas diarias)</strong> ,
                  específicamente en marzo de 2023, con una metodología de demos
                  semanales. Durante el proyecto el equipo se enfocó en
                  seleccionar un producto y diseñar minuciosamente el sitio web
                  para su comercialización. Se empleó una planificación
                  detallada para garantizar el cumplimiento de los objetivos en
                  el plazo establecido.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow">
              <span className="p-2 rounded icon-about">
                <i className="fs-5 bi bi-code-square text-white"></i>
              </span>
              <div className="card-body mt-3">
                <h5 className="card-title">Tecnologías</h5>
                <p className="card-about fs-5">
                  Para realizar este proyecto desarrollamos una{" "}
                  <strong> REST API </strong> hecha con{" "}
                  <strong>Node.js, Sequalize, Express, mySQL </strong>para el
                  <strong> Back-End </strong>, <strong> Table plus</strong> como
                  herramienta para gestionar nuestra base de datos, mientras que
                  para el
                  <strong> Front-End </strong>utilizamos{" "}
                  <strong>React, Redux, React Boostrap </strong> y{" "}
                  <strong> Boostrap </strong>. Para administrar y alojar
                  nuestros archivos utilizamos <strong>Git</strong> y{" "}
                  <strong>GitHub </strong>. <strong>Vercel </strong> y
                  <strong> Supabase</strong> para que hoy ustedes desde donde se
                  encuentren puedan apreciar nuestro trabajo.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow">
              <span className="p-2 rounded icon-about">
                <i className=" fs-5 bi bi-list-ul text-white"></i>
              </span>
              <div className="card-body mt-3">
                <h5 className="card-title">División de tareas</h5>
                <p className="card-about fs-5">
                  En este proyecto se emplearon herramientas digitales como
                  <strong>Trello y Figma </strong> para la gestión y
                  organización del trabajo en equipo. Estas plataformas
                  permitieron una
                  <strong> comunicación fluida y constante </strong> entre los
                  integrantes del grupo, así como el{" "}
                  <strong>seguimiento y control</strong> de las tareas a
                  realizar en cada fase del proyecto. El uso de estas
                  herramientas tecnológicas favoreció la{" "}
                  <strong>coordinación y colaboración del equipo </strong>, lo
                  que contribuyó a la consecución exitosa del proyecto.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="mx-auto mt-5">
          <h2 className="text-center mb-5 fw-bold">Equipo</h2>
          <div className="row g-2">
            {/* ----------------------andy----------------------- */}
            <div className="col-md-6  col-lg-3">
              <div className="card border-0 p-3">
                <img
                  src="/img/team_Andres.png"
                  className="img-team shadow mx-auto"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h3 className="card-title">Andrés Viera</h3>
                  <p className="card-text fw-bold fs-5">
                    Full Stack Developer Jr.
                  </p>
                </div>

                <div className="icons-team text-center">
                  <a
                    href="https://www.linkedin.com/in/andr%C3%A9s-viera/"
                    target="_blank"
                    className="text-black"
                  >
                    <i className="bi bi-linkedin me-2 "></i>
                  </a>

                  <a
                    href="https://github.com/andy-viera"
                    target="_blank"
                    className="text-black"
                  >
                    <i className="bi bi-github me-2"></i>
                  </a>

                  <a
                    href="mailto:andivie12@gmail.com?subject=&body="
                    target="_blank"
                    className="text-black"
                  >
                    <i className="bi bi-envelope-fill "></i>
                  </a>
                </div>
              </div>
            </div>

            {/* ----------------------vir----------------------- */}
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 p-3">
                <img
                  src="/img/VirginiaBarbaroimg.jpg"
                  className="img-team shadow mx-auto"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h3 className="card-title">Virginia Barbaro</h3>
                  <p className="card-text fw-bold fs-5">
                    Full Stack Developer Jr.
                  </p>
                </div>

                <div className="icons-team text-center">
                  <a
                    href="https://www.linkedin.com/in/virginia-barbaro/"
                    target="_blank"
                    className="text-black"
                  >
                    <i className="bi bi-linkedin me-2"></i>
                  </a>
                  <a
                    href="https://github.com/VirginiaBarbaro"
                    target="_blank"
                    className="text-black"
                  >
                    <i className="bi bi-github me-2"></i>
                  </a>
                  <a
                    href="mailto:virginiabarbaro@icloud.com?subject=&body=Hola,%20quiero%20contactarte"
                    target="_blank"
                    className="text-black"
                  >
                    <i className="bi bi-envelope-fill "></i>
                  </a>
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
                  <h3 className="card-title">Aline Farias</h3>
                  <p className="card-text fw-bold fs-5">
                    Full Stack Developer Jr.
                  </p>
                </div>

                <div className="icons-team text-center">
                  <a
                    href="https://www.linkedin.com/in/aline-farias-111035268/"
                    target="_blank"
                    className="text-black"
                  >
                    <i className="bi bi-linkedin me-2 icons-h"></i>
                  </a>
                  <a
                    href="https://github.com/aliifm"
                    target="_blank"
                    className="text-black"
                  >
                    <i className="bi bi-github me-2 icons-h"></i>
                  </a>
                  <a
                    href="mailto:Aline.farias.dev@gmail.com?subject==Hola,%20quiero%20contactarte"
                    target="_blank"
                    className="text-black"
                  >
                    <i className="bi bi-envelope-fill icons-h"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* ----------------------mathi----------------------- */}
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 p-3">
                <img
                  src="/img/Mathi.jpg"
                  className="img-team-matto shadow mx-auto"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h3 className="card-title ">Mathias Sandin</h3>
                  <p className="card-text fw-bold fs-5 ">
                    Full Stack Developer Jr.
                  </p>
                </div>

                <div className="icons-team text-center">
                  <a
                    href="https://www.linkedin.com/in/mathias-sandin/"
                    target="_blank"
                    className="text-black"
                  >
                    <i className="bi bi-linkedin me-2"></i>
                  </a>
                  <a
                    href="https://github.com/Matto1991?tab=repositories"
                    target="_blank"
                    className="text-black"
                  >
                    <i className="bi bi-github me-2"></i>
                  </a>
                  <a
                    href="mailto:matto.sandin.1991@gmail.com?subject=&body=Hola,%20quiero%20contactarte"
                    target="_blank"
                    className="text-black"
                  >
                    <i className="bi bi-envelope-fill "></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="mt-5 w-50 mx-auto">
            <div className="card shadow">
              <div className="card-body mt-3 text-center">
                <p className=" fs-4 fst-italic">
                  “La única manera de hacer un trabajo genial es{" "}
                  <strong>amar</strong> lo que haces”.
                </p>

                <p className="fs-5 fw-bold card-text text-end">Steve Jobs</p>
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
          <br />
          <div className="m-4 text-center">
            <hr />
            <img src="/img/ha_logo.svg" alt="tecnologias" className="ha-img " />
          </div>
        </div>
      </div>
      <Information />
      <Footer />
    </>
  );
}
