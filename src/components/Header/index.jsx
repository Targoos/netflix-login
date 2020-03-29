import React from "react";
import logo from "../../assets/images/logo.svg";
import "./styles.scss";

const Header = () => {
  return (
    <div className="site-header">
      <a href="#!">
        <img className="logo" src={logo} alt="Logotipo" />
      </a>
    </div>
  );
};

export default Header;
