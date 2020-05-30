import React, { useContext, Fragment } from "react";

//Importanto el Context, que es quien comparte el initialState y funciones a los de+
import productoContext from "../../context/productoContext";

const Carrito = () => {
  const {
    listaproductos,
    vaciarCarrito,
    agregarMismoProducto,
    eliminarProductoCarrito,
  } = useContext(productoContext);

  const Cerrar = (event) => {
    event.preventDefault();
    document.getElementById("li_id").classList.remove("show");
    document.getElementById("carritoProductos").classList.remove("show");
  };

  const VaciarCarrito = (event) => {
    event.preventDefault();
    vaciarCarrito();
    document.getElementById("li_id").classList.add("show");
    document.getElementById("carritoProductos").classList.add("show");
  
  };

  /* window.addEventListener("click", function (e) {
    if (
      document.getElementById("li_id").classList.remove("show") &&
      document.getElementById("carritoProductos").classList.remove("show")
    ) {
      console.log("abierto");
    }
  }); */

  const totalPrecio = () => {
    let total = 0;

    listaproductos.map((prod) => {
      total = total + prod.precio * prod.cantidad;
    });

    return total;
  };
  return (
    <Fragment>
      <button
        id="sanguchito"
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
            <li id="li_id" className="nav-item dropdown text-center">
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

              {/* <!--CARRITO--> */}
              <div
                id="carritoProductos"
                className="carritoProductos dropdown-menu dropdown-menu-right dropdown-menu-left"
                aria-labelledby="navbarDropdown"
              >
                {/* <!--HEADER--> */}

                <form id="formu">
                  <div className="row header-prod-carrito d-flex justify-content-between">
                    <div>
                      <button
                        onClick={(event) => VaciarCarrito(event)}
                        className="btnVaciarCarrito"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>

                    <div>
                      <p className="ivc" id="micarrito">
                        Mi Carrito
                      </p>
                    </div>

                    <div>
                      <button
                        onClick={(event) => Cerrar(event)}
                        className="btnCerrarCarrito"
                      >
                        <i className="fas fa-times fa-lg"></i>
                      </button>
                    </div>
                  </div>

                  <ProductosCarrito
                    listaproductos={listaproductos}
                    agregarMismoProducto={agregarMismoProducto}
                    eliminarProductoCarrito={eliminarProductoCarrito}
                  ></ProductosCarrito>

                  <FooterCarrito totalPrecio={totalPrecio}></FooterCarrito>
                </form>
              </div>
            </li>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

function ProductosCarrito(props) {
  const {
    listaproductos,
    agregarMismoProducto,
    eliminarProductoCarrito,
  } = props;

  const AumentarProducto = (e, id) => {
    e.preventDefault();

    let productoEncontrado = listaproductos.find((prod) => prod.id === id);

    productoEncontrado.cantidad++;
    agregarMismoProducto(productoEncontrado);
  };

  const DisminuirProducto = (e, id) => {
    e.preventDefault();

    let productoEncontrado = listaproductos.find((prod) => prod.id === id);

    productoEncontrado.cantidad--;
    if (productoEncontrado.cantidad > 0) {
      agregarMismoProducto(productoEncontrado);
    } else {
      eliminarProductoCarrito(id);
    }
  };

  const EliminarProducto = (e, id) => {
    e.preventDefault();
    //Ubicar al producto
    let productoEncontrado = listaproductos.find((prod) => prod.id === id);
    /*Re asignarle cantidad 0 al Producto key="x", por si es que nuevamente quiere añadirlo y
    empiece nuevamente la cuenta de 1 en 1*/
    productoEncontrado.cantidad = 0;
    //Se agrega en la lista de productos con cantidad 0
    agregarMismoProducto(productoEncontrado);

    eliminarProductoCarrito(id);
  };

  return (
    <div className="productos-del-carrito" id="productos-del-carrito">

      {listaproductos.map((prod, index) => (
        <React.Fragment key={index}>
          <div className="row bg-white">
            <div className="imgProdCarrito col-4 px-0 align-self-center">
              <div className="d-flex justify-content-center">
                <img
                  className="card-productos-carrito"
                  src={prod.imagen}
                  alt="Card imagen cap"
                />
              </div>
            </div>
            <div className="col-8 px-0 align-self-center">
              <div className="pl-2 descripProdCarrito">
                <p className="ivc-prod">{prod.nombre}</p>
                <p className="ivc-prod">{prod.talla}</p>
                <p className="ivc-prod">S/ {prod.precio}</p>
                <hr className="hr-prod" />
                {/* <!--# productos | botones--> */}
                <div className="row">
                  <div className="col-6 prod-cantidad align-self-center">
                    <p className="ivc-prod-cantidad">
                      En el carro: {prod.cantidad}
                    </p>
                  </div>
                  <div className="col-6 prod-botones d-flex justify-content-around">
                    <button
                      className="btne btne-add"
                      onClick={(e) => AumentarProducto(e, prod.id)}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                    <button
                      className="btne btne-decre"
                      onClick={(e) => DisminuirProducto(e, prod.id)}
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <button
                      className="btne btne-remove"
                      onClick={(e) => EliminarProducto(e, prod.id)}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
}

function FooterCarrito(props) {
  const { totalPrecio } = props;
  return (
    <div className="footerPago">
      <div className="d-flex justify-content-between">
        <div className="cont-total">
          <p className="total">Total:</p>
        </div>
        <div className="cont-costo">
          <p className="costo">S/ {totalPrecio().toFixed(2)}</p>
        </div>
      </div>
      <div className="container">
        <button className="btnPagar">
          <span>PAGAR</span>
        </button>
      </div>
    </div>
  );
}

export default Carrito;
