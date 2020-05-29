import React, { Fragment } from "react";

const Carrito = () => {
  return (
    <Fragment>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* <!-- */}
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        {/*  Permite que se comprima cuando se disminuye la pantalla
      --> */}

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarTogglerDemo01"
        >
          <div className="navbar-nav">
            <li className="nav-item dropdown text-center">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="/img/cart-empty.svg"
                  width="30"
                  height="30"
                  alt=""
                  loading="lazy"
                />
              </a>

              {/* <!--PRODUCTOS DEL CARRITO--> */}
              <div
                className="carritoProductos dropdown-menu dropdown-menu-right dropdown-menu-left"
                aria-labelledby="navbarDropdown"
              >
                {/* <!--HEADER--> */}
                <div className="row header-prod-carrito d-flex justify-content-between">
                  <div>
                    <button className="btnCerrarCarrito">
                      <i className="fas fa-times fa-lg"></i>
                    </button>
                  </div>

                  <div>
                    <p className="ivc">Mi Carrito</p>
                  </div>

                  <div>
                    <button className="btnVaciarCarrito">
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>

                {/* <!--PRODUCTOS (iterar)--> */}
                <div className="productos-del-carrito">
                  <div className="row bg-white">
                    <div className="imgProdCarrito col-4 px-0 align-self-center">
                      <div className="d-flex justify-content-center">
                        <img
                          className="card-productos-carrito"
                          src="/img/blink1.jpg"
                          alt="Card imagen cap"
                        />
                      </div>
                    </div>
                    <div className="col-8 px-0 align-self-center">
                      <div className="pl-2 descripProdCarrito">
                        <p className="ivc-prod">Camiseta blink 2020</p>
                        <p className="ivc-prod">XL</p>
                        <p className="ivc-prod">S/ 182</p>
                        <hr className="hr-prod" />
                        {/* <!--# productos | botones--> */}
                        <div className="row">
                          <div className="col-6 prod-cantidad align-self-center">
                            <p className="ivc-prod-cantidad">En el carro: 1</p>
                          </div>
                          <div className="col-6 prod-botones ">
                            <button className="btne btne-add">
                              <i className="fas fa-plus"></i>
                            </button>
                            <button className="btne btne-decre">
                              <i className="fas fa-minus"></i>{" "}
                            </button>
                            <button className="btne btne-remove">
                              <i className="fas fa-times"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>

                {/* <!--PAGO DEL CARRITO (FOOTER)--> */}
                <div className="footerPago">
                  <div className="d-flex justify-content-between">
                    <div>
                      <p className="total">Total:</p>
                    </div>
                    <div>
                      <p className="costo">S/ 1820</p>
                    </div>
                  </div>
                  <div className="container">
                    <button className="btnPagar">
                      <span>PAGAR</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Carrito;
