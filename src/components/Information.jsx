import axios from "axios";
import React, { useState } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Information() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // eslint-disable-next-line
  const navigate = useNavigate();

  const notify = () => {
    toast.success("Database reset successfully", {
      position: "bottom-left",
    });
  };

  const handleResetDb = () => {
    const getReset = async () => {
      await axios({
        method: "POST",
        url: `${process.env.REACT_APP_BACKEND_URL}/reset`,
      });
    };
    notify();
    getReset();
  };

  return (
    <>
      <button
        onClick={handleShow}
        className="cta-sobre-proyecto-btn text-white btn-information"
      >
        Sobre el proyecto
      </button>
      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="body-offcanvas-project">
          <h5 className="title-offcanvas-project">
            <i className="bi bi-database-fill me-1"></i> BASE DE DATOS
          </h5>
          <hr className="separator-offcanvas-project" />
          <p className="text-offcanvas-project">
            {" "}
            <i className="bi bi-database-exclamation me-2"></i> Para una mejor
            experiencia, se recomienda reiniciar la base de datos antes de
            navegar por el sitio.
          </p>
          <button
            onClick={() => handleResetDb()}
            className="cta-offcanvas-project"
          >
            Reiniciar BD
          </button>
          <ToastContainer className="toast-success" />
          <h5 className="title-offcanvas-project mt-4">
            <i className="bi bi-people-fill me-1"></i> USUARIOS DE PRUEBA
          </h5>
          <hr className="separator-offcanvas-project" />
          <p className="text-offcanvas-project">
            {" "}
            Para simplificar el acceso a la aplicación, se proporcionan los
            siguientes usuarios de prueba:
          </p>
          <p className="text-offcanvas-project">
            <i className="bi bi-person me-2"></i>Usuario para{" "}
            <strong>Comprador</strong>:
          </p>
          <ul className="text-offcanvas-project">
            <li>E-mail: user@ecozy.com</li>
            <li>Password: 1234</li>
          </ul>
          <Link to="/login">
            {" "}
            <button className="cta-offcanvas-project mb-3">
              Iniciar como comprador
            </button>{" "}
          </Link>
          <p className="text-offcanvas-project">
            <i className="bi bi-person-gear me-2"></i>Usuario para{" "}
            <strong>Administrador</strong>:
          </p>
          <ul className="text-offcanvas-project">
            <li>E-mail: admin@ecozy.com</li>
            <li>Password: 1234</li>
          </ul>
          <Link to="/login/admin">
            {" "}
            <button className="cta-offcanvas-project">
              Iniciar como administrador
            </button>
          </Link>
          <h5 className="title-offcanvas-project mt-4">
            <i className="bi bi-person-lines-fill me-1"></i> AUTORES
          </h5>
          <hr className="separator-offcanvas-project" />
          <p className="text-offcanvas-project">
            {" "}
            El presente sitio de e-commerce es un proyecto desarrollado por
            estudiantes del coding bootcamp de Hack Academy.
          </p>
          <Link to="/project/details">
            {" "}
            <button className="cta-offcanvas-project">
              Sobre este proyecto
            </button>{" "}
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Information;
