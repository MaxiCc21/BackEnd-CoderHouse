import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { height } from "@mui/system";
import SearchForm from "../searchForm/SearchForm";

const NavBar = () => {
  return (
    <div className="my-Nav-Container">
      <nav className="my-nav">
        <div className="Nav-Logo">asd</div>
        <div className="Nav-Search">
          <SearchForm />
        </div>
        <div className="Nav-Promo">
          <img
            className="Nav-Promo-img"
            src="https://http2.mlstatic.com/D_NQ_773701-MLA54334638216_032023-OO.webp"
            alt=""
          />
        </div>
        <div className="Nav-Location">
          <a href="#">
            <FontAwesomeIcon className="locationIcon" icon={faLocationDot} />
            Enviar a <br />
            Capital Federal
          </a>
        </div>
        <div className="Nav-Bar">
          <ul className="my-ul">
            <li>
              <a href="#">Categoria</a>
            </li>
            <li>
              <a href="#">Ofertas</a>
            </li>
            <li>
              <a href="#">Historial</a>
            </li>
            <li>
              <a href="#">Supermercado</a>
            </li>
            <li>
              <a href="#">Vender</a>
            </li>
            <li>
              <a href="#">Ayuda</a>
            </li>
          </ul>
        </div>
        <div class="Nav-Sesion">
          <ul className="my-ul">
            <li>
              <a href="#">Creá tu cuenta</a>
            </li>
            <li>
              <a href="#">Ingresá</a>
            </li>
            <li>
              <a href="#">Mis Compras</a>
            </li>
          </ul>
          <a href="#">
            <FontAwesomeIcon className="locationIcon" icon={faCartShopping} />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
