import React from "react";

import Producto from "./Producto";

import prods from "../../productos.json";

const ListaProductos = () => {
  //Usa el JSON

  return prods.map((productito) => (
    <Producto
      key={productito.id}
      product = {productito}
    ></Producto>
  ));
};

export default ListaProductos;
