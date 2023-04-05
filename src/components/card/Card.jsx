import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-container">
      <a href="#">
        <div className="card-img-container">
          <img
            src="https://dummyimage.com/224x224/ffffff/616161.png"
            alt="asd"
          />
        </div>
        <hr />
        <div className="card-data-container">
          <span>$ 313.954</span>
          <br />
          <small>
            Envío gratis
            <FontAwesomeIcon
              className="locationIcon my-Lightning-icon"
              icon={faBoltLightning}
            />
            Full
          </small>
        </div>
      </a>
    </div>
  );
};

export default Card;
