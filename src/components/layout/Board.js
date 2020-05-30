import React from "react";

import ListaProductos from "../functionals/ListaProductos"

const Board = () => {


  return (
    <div className="board">
      <section className="container mt-4 mb-5">
        <div className="card-deck mt-4">
          <ListaProductos></ListaProductos>
        </div>
      </section>
    </div>
  );
};

export default Board;
