import {
  AGREGAR_NUEVO_PRODUCTO,
  AGREGAR_MISMO_PRODUCTO,
} from "../utils/constants";

export default (state, action) => {
  switch (action.type) {
    case AGREGAR_NUEVO_PRODUCTO:
      return {
        ...state,
        listaproductos: [...state.listaproductos, action.payload],
      };

    case AGREGAR_MISMO_PRODUCTO:
      return {
        ...state,
        listaproductos: state.listaproductos.map((prod) => {
          if (prod.id === action.payload.id) {
            console.log("xd");
            return action.payload;
          }
          return prod;
        }),
      };
    /* case ANADIR_CARRITO:
      return {
        ...state,
        listaproductos: state.listaproductos.filter((prod) => {
          if (prod.id === action.payload.id) {
            return null;
          } else {
            return  action.payload
          }
        }),
      }; */

    default:
      return state;
  }
};
