import React from "react";

import Carrito from "../functionals/Carrito";

const Navigation = () => {
  return (
    /* <!--NAVEGACION--> */
    <div>
      <nav className="navbar navbar-dark navbar-expand-md">
        <a className="navbar-brand" href="/">
          <img
            className="logo"
            src="/img/logoBlink.png"
            width="60"
            height="60"
            alt="seat"
            loading="lazy"
            href="#"/>
        </a>

        <Carrito></Carrito>
        
      </nav>
    </div>
  );
};

export default Navigation;
