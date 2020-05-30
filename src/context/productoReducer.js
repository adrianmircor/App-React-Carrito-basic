import {
  AGREGAR_NUEVO_PRODUCTO,
  AGREGAR_MISMO_PRODUCTO,
  MODIFICAR_ESTADO_CARRITO,
  VACIAR_CARRITO,
  ELIMINAR_PRODUCTO,
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
    case MODIFICAR_ESTADO_CARRITO:
      return {
        ...state,
        opencarrito: action.payload,
      };

    case VACIAR_CARRITO:
      return {
        ...state,
        listaproductos: state.listaproductos.filter(
          (prod) => (prod.cantidad = 0)
        ),
      };
    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        listaproductos: state.listaproductos.filter(
          (prod) => prod.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
