import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {gql, useQuery} from '@apollo/client';

const OBTENER_USUARIO = gql`
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

const Sidebar = () => {

    //Routing
    const router = useRouter();

    //Obtener usuario
    const {data, loading, error} = useQuery(OBTENER_USUARIO);

    if(loading) return (
        <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    );

    

    if(data.obtenerUsuario !== null) {
        const { nombre, apellido, email, tipoUsuario } = data.obtenerUsuario;
        return(
            <aside className="bg-green-500 sm:w-1/4 xl:w-1/5 sm:min-h-screen p-5">
                <div>
                    <p className="text-white text-3xl text-center mb-2">Gorilla Media Monitoring</p>
                    <p className="text-white text-light text-right">Administrador</p>
                </div>
                <nav className="mt-6 list-none ml-6 fixed">
                <li className="p-2 mb-2">
                        <Link href="/">
                            <button className="text-white flex item center w-full text-white rounded">
                            <svg className="h-5 w-6 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg> Regresar 
                            </button>
                        </Link>
                    </li>
                    <li className={router.pathname === "/listausuarios" || router.pathname === "/listanotas" || router.pathname === "/nuevanota" ? "bg-green-800 p-2 rounded mb-2" : "p-2"}>
                        <Link href="/listausuarios">
                            <button className="text-white flex item center w-full text-white rounded">
                            <svg className="h-5 w-6 mr-2"  fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> Usuarios 
                            </button>
                        </Link>
                    </li>

                    <li className={router.pathname === "/listaclientes" || router.pathname === "/listanotas" || router.pathname === "/nuevanota" ? "bg-green-800 p-2 rounded mb-2" : "p-2"}>
                        <Link href="/listaclientes">
                            <button className="text-white flex item center w-full text-white rounded">
                            <svg className="h-5 w-6 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg> Clientes 
                            </button>
                        </Link>
                    </li>
                    
                </nav>
            </aside>
        );
    } else {
        if(!data || data && !data.obtenerUsuario) return router.push('/login');
    }


    
}

export default Sidebar;