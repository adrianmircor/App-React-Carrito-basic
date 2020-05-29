import React from "react";

import Principal from "./components/layout/Principal";
import ProductoState from "../src/context/productoState";

function App() {
  return (
    <ProductoState>
      <Principal />
    </ProductoState>
  );
}

export default App;
