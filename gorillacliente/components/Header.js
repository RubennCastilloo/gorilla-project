import React from 'react';
import { gql, useQuery } from '@apollo/client';
import {useRouter} from 'next/router'
import client from '../config/apollo';

const OBTENER_USUARIO = gql `
    query obtenerUsuario {
        obtenerUsuario {
                id
                nombre
                apellido
                email
        }
    }
`;

const Header = () => {

    //Routing
    const router = useRouter();

    // Query de Apollo
    const { data, loading, error } = useQuery(OBTENER_USUARIO);
    // console.log(data);
    // console.log(loading);
    // console.log(error);

    //Proteger que no accedamos a data antes de tener resultados
    if(loading) return 'Cargando...';

    //Si no hay informacion
    if(!data) {
        return router.push('/login');
    }

    const { nombre, apellido, email } = data.obtenerUsuario;

    const cerrarSesion = () => {
        localStorage.removeItem('token');
        client.resetStore()
        router.push('/login');
    }

    return(
        <div className="sm:flex sm:justify-between mb-6">
             <p className="mr-2 mb-5 lg:mb-0">Hola: {nombre} {apellido}</p>

             <button 
                onClick={() => cerrarSesion()}
                type="button"
                className="bg-green-500 w-full sm:w-auto fond-bold uppercase text-xs rounded py-1 px-2 text-white shadow-md hover:bg-green-600"
             >
                Cerrar Sesion
             </button>
        </div>
       
    );
}

export default Header;