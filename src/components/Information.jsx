import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Information() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const notify = () => {
    toast.success("Database reset successfully", {
      position: "bottom-right",
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
      <Button
        variant="light"
        onClick={handleShow}
        className="cta-sobre-proyecto text-white me-2 btn-info"
      >
        Sobre el Proyecto
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement={"start"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sobre este proyecto</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>
            {" "}
            El presente sitio de e-commerce es un proyecto desarrollado por
            estudiantes del Coding Bootcamp de Hack Academy.
          </p>
          <Link to="/project/details">
            {" "}
            <button className="btn cta-offcanvas-project">
              Sobre este proyecto
            </button>{" "}
          </Link>
          <hr />
          <h5>
            <i class="bi bi-people me-2"></i> Usuarios de prueba
          </h5>
          <p>
            {" "}
            Para simplificar el acceso a la aplicación, se proporcionan los
            siguientes usuarios de prueba:
          </p>
          <p>
            <i class="bi bi-person me-2"></i>Usuario para{" "}
            <strong>Comprador</strong>:
          </p>
          <ul>
            <li>E-mail: user@ecozy.com</li>
            <li>Password: 1234</li>
          </ul>
          <Link to="/login">
            {" "}
            <button className="btn cta-offcanvas-project mb-3">
              Iniciar como comprador
            </button>{" "}
          </Link>
          <p>
            <i class="bi bi-person-gear me-2"></i>Usuario para{" "}
            <strong>Administrador</strong>:
          </p>
          <ul>
            <li>E-mail: admin@ecozy.com</li>
            <li>Password: 1234</li>
          </ul>
          <Link to="/login-admin">
            {" "}
            <button className="btn cta-offcanvas-project">
              Iniciar como administrador
            </button>
          </Link>
          <hr />
          <p>
            {" "}
            <i class="bi bi-database-exclamation me-2"></i> Para una mejor
            experiencia de usuario, se recomienda reiniciar la base de datos de
            prueba antes de navegar por el sitio:
          </p>
          <button onClick={()=>handleResetDb()} className="btn cta-offcanvas-project">
            Reiniciar BD
          </button>
          <ToastContainer className="toast-message" />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Information;
