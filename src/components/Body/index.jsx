import React, { useState } from "react";
import facebook from "../../assets/images/facebook.png";
import "./styles.scss";

const Body = () => {
  const [errorEmail, guardarErrorEmail] = useState(false);
  const [errorPassword, guardarErrorPassword] = useState(false);

  const idRequerido = e => {
    if (e.target.value === "") {
      guardarErrorEmail(true);
    } else if (e.target.value.length > 0) {
      guardarErrorEmail(false);
    }
  };

  const contraseñaRequerida = e => {
    if (e.target.value === "") {
      guardarErrorPassword(true);
    } else if (e.target.value.length >= 4) {
      guardarErrorPassword(false);
    }
  };

  return (
    <div className="formulario-login contenedor">
      <form action="#">
        <legend>Inicia sesión</legend>
        <div className="campo">
          <input
            className="input"
            onBlur={idRequerido}
            type="text"
            id="usuario"
          />
          <label htmlFor="usuario">Email o número de teléfono</label>
        </div>
        {errorEmail ? (
          <p>Ingresa un email o un número de teléfono válido.</p>
        ) : null}
        <div className="campo">
          <input onBlur={contraseñaRequerida} type="password" id="contraseña" />
          <label htmlFor="contraseña">Contraseña</label>
        </div>
        {errorPassword ? (
          <p>La contraseña debe tener entre 4 y 60 caracteres.</p>
        ) : null}
        <div className="submit">
          <input type="submit" value="Iniciar sesión" />
        </div>
        <div className="acciones">
          <div className="recuerdame">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Recuérdame</label>
          </div>
          <div className="ayuda">
            <a href="#!">¿Necesitas ayuda?</a>
          </div>
        </div>
      </form>
      <div className="contenido-inferior">
        <a href="#!">
          <img src={facebook} alt="facebook" />
          Iniciar sesión con Facebook
        </a>
        <a href="#!" className="nuevo-usuario">
          ¿Primera vez en Netflix? <span>Subscríbete ya</span>
        </a>
        <span>Netflix Login CLONADO por Tulio Ramirez</span>
      </div>
    </div>
  );
};

export default Body;
