import {
    SELECCIONAR_ESTADO,
    SELECCIONAR_MUNICIPIO,
    SELECCIONAR_PROGRAMAS,
    SELECCIONAR_IMPRESOS
} from  '../../types';

export default ( state, action) => {
    switch(action.type) {
        case SELECCIONAR_ESTADO: 
            return{
              ...state,
              estado: action.payload 
            }

        case SELECCIONAR_MUNICIPIO: 
        return{
            ...state,
            municipio: action.payload 
        }   
        default:
        return state
    }
} 