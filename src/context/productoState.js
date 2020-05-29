import React, { useReducer } from "react";
import productoContext from "./productoContext";
import productoReducer from "./productoReducer";

import {
    AGREGAR_NUEVO_PRODUCTO,
    AGREGAR_MISMO_PRODUCTO
} from '../utils/constants'

const ProductoState = (props) => {


    const initialState = {
        listaproductos : [],
    }

    //useReducer
    const [state, dispatch] = useReducer(productoReducer,initialState);

    //Funciones
    const agregarNuevoProducto = (producto) => {
        dispatch({
            type: AGREGAR_NUEVO_PRODUCTO,
            payload: producto
        })
    }

    const agregarMismoProducto = (producto) => {
        dispatch({
            type: AGREGAR_MISMO_PRODUCTO,
            payload: producto
        })
    }

    return (  
        <productoContext.Provider
            value={{
                listaproductos: state.listaproductos,
                
                agregarNuevoProducto,
                agregarMismoProducto
            }}>
            
            {props.children}

        </productoContext.Provider>
    );
}
 
export default ProductoState;