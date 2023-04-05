import React from "react";
import {
  faAngleRight,
  faMobile,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./UserIngresar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "@mui/material/Button";
const UserIngresar = () => {
  return (
    <>
      <section className="section-user-joinIn">
        <div className="container-user-joinIN">
          <div className="left-site">
            <h2>
              Ingresá tu e-mail, <br />
              teléfono o usuario de
              <br /> Mercado Libre
            </h2>
            <hr />
            <small>Reportar un problema</small>
            <a href="#" className="user-left-link">
              <FontAwesomeIcon
                icon={faMobile}
                className="user-icon-left-left"
              />
              Robo o pérdida de teléfono
              <FontAwesomeIcon
                icon={faAngleRight}
                className="user-icon-left-right"
              />
            </a>
            <hr style={{ margin: "1px", width: "220px" }} />
            <a href="#" className="user-left-link">
              <FontAwesomeIcon icon={faUser} className="user-icon-left-left" />
              Robo de cuenta
              <FontAwesomeIcon
                icon={faAngleRight}
                className="user-icon-left-right"
              />
            </a>
            <a href="#" className="user-left-link-help">
              Necesito ayuda con otros temas
            </a>
          </div>
          <div className="right-site">
            <div className="right-site-content">
              <form>
                <div className="right-site-form-imput-area">
                  <label htmlFor="#">E-mail, teléfono o usuario</label>
                  <input type="text" />
                </div>
                <div className="right-site-form-button-area">
                  <Button variant="contained">Continuar</Button>
                  <Button
                    variant="text"
                    sx={{ color: "#2596be", paddingLeft: "50px" }}
                  >
                    Crear
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserIngresar;
