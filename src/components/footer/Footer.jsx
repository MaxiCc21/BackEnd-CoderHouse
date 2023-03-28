import "./Footer.css";

const Footer = () => {
  return (
    <section className="section-footer">
      <div className="container-footer">
        <ul className="ul-footer">
          <li>
            <a href="#">Trabajá con nosotros</a>
          </li>
          <li>
            <a href="#">Términos y condiciones</a>
          </li>
          <li>
            <a href="#">Cómo cuidamos tu privacidad</a>
          </li>
          <li>
            <a href="#">Accesibilidad</a>
          </li>
          <li>
            <a href="#">Información al usuario finaciero</a>
          </li>
          <li>
            <a href="#">Ayuda</a>
          </li>
          <li>
            <a href="#">Defensa del Consumidor</a>
          </li>
          <li>
            <a href="#">Informacion sobre seguros</a>
          </li>
        </ul>
        <small>Copyright © 1999-2023 MercadoLibre S.R.L.</small>
        <br />
        <span>Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA</span>
      </div>
    </section>
  );
};

export default Footer;
