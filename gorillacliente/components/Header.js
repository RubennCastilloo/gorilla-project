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
                tipoUsuario
        }
    }
`;

const Header = () => {


    //Routing
    const router = useRouter();

    // Query de Apollo
    const { data, loading, error } = useQuery(OBTENER_USUARIO);

    //Proteger que no accedamos a data antes de tener resultados
    if(loading) return (
        <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    );

    const { nombre, apellido, email, tipoUsuario } = data.obtenerUsuario;


    const cerrarSesion = () => {
        localStorage.removeItem('token');
        client.resetStore()
        router.push('/login');
    }

    return(
        <div className="sm:flex sm:justify-between mb-6">
             <p className="mr-2 mb-5 lg:mb-0">Hola: {nombre} {apellido} | <span className="uppercase">{tipoUsuario}</span></p>

             <button 
                onClick={() => cerrarSesion()}
                type="button"
                className="flex justify-center item  bg-red-600 w-full sm:w-auto fond-bold uppercase text-xs rounded py-1 px-2 text-white shadow-md hover:bg-red-700"
             >
                 Cerrar Sesion <svg className="h-5 w-5 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
             </button>
        </div>
       
    );
}

export default Header;