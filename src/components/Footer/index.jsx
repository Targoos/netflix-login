import React from "react";
import "./styles.scss";

const Footer = () => {
  return (
    <div className="site-footer">
      <div className="contenedor">
        <p>¿Preguntas? Llama al 800-345-1375</p>
        <nav className="menu-footer">
          <a href="#!">Términos de las tarjetas de regalo</a>
          <a href="#!">Términos de uso</a>
          <a href="#!">Declaración de privacidad</a>
        </nav>
        <select className="lenguaje">
          <option value="eng">English</option>
          <option value="esp">Español</option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
