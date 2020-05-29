import React, { useState, useContext } from "react";

import Carrito from "../functionals/Carrito";

//Importanto el Context, que es quien comparte el initialState y funciones a los de+
import productoContext from "../../context/productoContext";

const Producto = (props) => {
  const { product } = props;
  const { id, nombre, imagen, precio, talla } = product;

  const {
    listaproductos,
    agregarNuevoProducto,
    agregarMismoProducto,
  } = useContext(productoContext);

  //Serviria para calculo de stock
  const [producto, setProducto] = useState({
    id,
    nombre,
    imagen,
    precio,
    talla,
    cantidad: 0,
  });

  //Los productos que iran a carrito se le asignan 1,
  //ya que al hacerle click en añadir al carrito recien se inicializan en 1
  const [productoCarrito, setProductoCarrito] = useState({
    id: id,
    nombre: nombre,
    imagen: imagen,
    precio: precio,
    talla: talla,
    cantidad: 1,
  });

  const handleAnadir = () => {
    if (listaproductos.length === 0) {
      console.log("se agrega");
      setProductoCarrito({
        ...productoCarrito,
        cantidad: productoCarrito.cantidad + 1,
      });
      agregarNuevoProducto(productoCarrito);
      console.log(producto);
      console.log(listaproductos);
    } else {
      const productoEncontrado = listaproductos.find(
        (element) => element.id == producto.id
      );

      console.log("ProductoEncontrado: ", productoEncontrado);
      console.log("listaProductos: ", listaproductos);

      if (productoEncontrado) {
        //Si se añade del mismo id, agregar cantidad
        console.log("se modifica");
        setProductoCarrito({
          ...productoCarrito,
          cantidad: productoCarrito.cantidad + 1,
        });
        agregarMismoProducto(productoCarrito);
      } else {
        //Si es distinto id, agregar producto
        console.log("se agrega");
        setProductoCarrito({
          ...productoCarrito,
          cantidad: productoCarrito.cantidad + 1,
        });
        agregarNuevoProducto(productoCarrito);
      }
    }
  };

  return (
    <div className="col-md-6 col-lg-3">
      <div className="card mt-3">
        <div className="container d-flex justify-content-center">
          <img className="card-img-top" src={imagen} alt="" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-textual">
            Descripción: This is a longer card with supporting text below as a
            natural lead-in to additional content. This content is a little bit
            longer.
          </p>
          <p className="card-textual">Talla: {talla}</p>
          <p className="card-textual">Precio: S/ {precio}</p>
          <div className="container d-flex justify-content-center">
            <button
              className="btn btn-primary mt-2"
              onClick={() => handleAnadir()}
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producto;
