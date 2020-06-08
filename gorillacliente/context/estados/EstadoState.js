import React, { useReducer} from 'react';
import EstadoContext from './EstadoContext';
import EstadoReducer from './EstadoReducer';

import {
    SELECCIONAR_ESTADO,
    SELECCIONAR_MUNICIPIO,
    SELECCIONAR_PROGRAMAS,
    SELECCIONAR_IMPRESOS
} from  '../../types';

const EstadoState = ({children}) => {

    //State de Estados
    const initialState = {
        estado: [],
        municipio: []
    } 

    const [ state, dispatch ] = useReducer(EstadoReducer, initialState);

    //Modifica el estado
    const agregarEstado = estado => {
            // console.log(estado);
            dispatch({
                type: SELECCIONAR_ESTADO,
                payload: estado
            })
    }

    const agregarMunicipio = municipio => {
        // console.log(municipio);
        dispatch({
            type: SELECCIONAR_MUNICIPIO,
            payload: municipio
        })
    }

    return(
        <EstadoContext.Provider
            value={{
                agregarEstado,
                estado: state.estado,
                agregarMunicipio,
                municipio: state.estado,
            }}
        >
            {children}

        </EstadoContext.Provider>

    );
}

export default EstadoState;