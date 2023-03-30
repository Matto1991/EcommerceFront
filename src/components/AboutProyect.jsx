import React from "react";
import About from "../components/About.css";
import Footer from "./Footer";
import NavbarOther from "../components/NavbarOther";
export default function AboutProyect() {
  return (
    <>
      <NavbarOther />
      <div className="row hero-about">
        <div className="col-12 position-relative"></div>
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
                <p className="card-text">
                  Este proyecto se llevó a cabo en un período de tres semanas,
                  específicamente en marzo de 2023, con una metodología de demos
                  semanales. Durante el proyecto el equipo se enfocó en
                  seleccionar un producto y diseñar minuciosamente el sitio web
                  para su comercialización. Se empleó una planificación rigurosa
                  y detallada para garantizar el cumplimiento de los objetivos
                  en el plazo establecido.
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
                <p className="card-text">
                  Para realizar este proyecto desarrollamos una REST API hecha
                  con Node.js, Sequalize, Express, mySQL para el Back-End, Table
                  plus como herramienta para gestionar nuestra base de datos,
                  mientras que para el Front-End utilizamos React, Redux, React
                  Boostrap y Boostrap. Para administrar y alojar nuestros
                  archivos utilizamos Git y GitHub. Vercel y Supabase para que
                  hoy ustedes desde donde se encuentren puedan apreciar nuestro
                  trabajo.
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
                <p className="card-text">
                  En este proyecto se emplearon herramientas digitales como
                  Trello y Figma para la gestión y organización del trabajo en
                  equipo. Estas plataformas permitieron una comunicación fluida
                  y constante entre los integrantes del grupo, así como el
                  seguimiento y control de las tareas a realizar en cada fase
                  del proyecto. El uso de estas herramientas tecnológicas
                  favoreció la coordinación y colaboración del equipo, lo que
                  contribuyó a la consecución exitosa del proyecto.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="mx-auto mt-5">
          <h2 className="text-center mb-5 fw-bold">Equipo</h2>
          <div className="row g-2">
            <div className="col-md-6  col-lg-3">
              <div className="card border-0 p-3">
                <img
                  src="/img/team_Andres.png"
                  className="img-team-ali shadow mx-auto"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h4 className="card-title">Andrés Viera</h4>
                  <p className="card-text fw-bold ">Full Stack Developer Jr.</p>
                </div>

                <div className="icons-team text-center">
                  <i className="bi bi-linkedin me-2"></i>
                  <i className="bi bi-github me-2"></i>
                  <i className="bi bi-envelope-fill "></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 p-3">
                <img
                  src="/img/VirginiaBarbaroimg.jpg"
                  className="img-team-ali shadow mx-auto"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h4 className="card-title">Virginia Barbaro</h4>
                  <p className="card-text fw-bold ">Full Stack Developer Jr.</p>
                </div>

                <div className="icons-team text-center">
                  <i className="bi bi-linkedin me-2"></i>
                  <i className="bi bi-github me-2"></i>
                  <i className="bi bi-envelope-fill "></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 p-3">
                <img
                  src="/img/AlineFariasprueba.jpg"
                  className="img-team-ali shadow mx-auto"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h4 className="card-title">Aline Farias</h4>
                  <p className="card-text fw-bold ">Full Stack Developer Jr.</p>
                </div>

                <div className="icons-team text-center">
                  <i className="bi bi-linkedin me-2"></i>
                  <i className="bi bi-github me-2"></i>
                  <i className="bi bi-envelope-fill "></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 p-3">
                <img
                  src="/img/Mathi.jpg"
                  className="img-team-ali shadow mx-auto"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h4 className="card-title ">Mathias Sandin</h4>
                  <p className="card-text fw-bold ">Full Stack Developer Jr.</p>
                </div>

                <div className="icons-team text-center">
                  <i className="bi bi-linkedin me-2"></i>
                  <i className="bi bi-github me-2"></i>
                  <i className="bi bi-envelope-fill "></i>
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="mt-5 w-50 mx-auto">
            <div className="card shadow">
              <div className="card-body mt-3 text-center">
                <p className="card-text fs-5">
                  “La única manera de hacer un trabajo genial es amar lo que
                  haces”.
                </p>
                <p className="fs-5 fw-bold">Steve Jobs</p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <hr />
            <h2 className="text-center mt-5 mb-4 fw-bold">Tecnologias</h2>
            <img
              src="/img/Tecnologias(1).png"
              alt="tecnologias"
              className="w-100"
            />
          </div>
          <br />
          <div className="m-4 text-center">
            <hr />
            <img src="/img/ha_logo.svg" alt="tecnologias" className="ha-img " />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
