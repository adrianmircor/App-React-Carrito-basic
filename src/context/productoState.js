import React, { useReducer } from "react";
import productoContext from "./productoContext";
import productoReducer from "./productoReducer";

import {
    AGREGAR_NUEVO_PRODUCTO,
    AGREGAR_MISMO_PRODUCTO,
    MODIFICAR_ESTADO_CARRITO,
    VACIAR_CARRITO,
    ELIMINAR_PRODUCTO
} from '../utils/constants'

const ProductoState = (props) => {


    const initialState = {
        listaproductos : [],
        opencarrito: true
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

    const modificarEstadoCarrito = (bool) => {
        dispatch({
            type: MODIFICAR_ESTADO_CARRITO,
            payload: bool
        })
    }

    const vaciarCarrito = () => {
        dispatch({
            type:VACIAR_CARRITO,
        })
    }
    
    const eliminarProductoCarrito = (id) => {
        dispatch({
            type: ELIMINAR_PRODUCTO,
            payload: id
        })
    }

    return (  
        <productoContext.Provider
            value={{
                listaproductos: state.listaproductos,
                opencarrito: state.opencarrito,
                
                agregarNuevoProducto,
                agregarMismoProducto,
                modificarEstadoCarrito,
                vaciarCarrito,
                eliminarProductoCarrito
            }}>
            
            {props.children}

        </productoContext.Provider>
    );
}
 
export default ProductoState;