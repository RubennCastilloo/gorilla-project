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
                    <p className="text-white text-light text-right">GMS Administrator v1.0</p>
                </div>
                <nav className="mt-6 list-none ml-6 fixed">
                    <li className={router.pathname === "/" || router.pathname === "/listanotas" || router.pathname === "/nuevanota" ? "bg-green-800 p-2 rounded" : "p-2"}>
                        <Link href="/">
                            <button className="text-white flex item center w-full text-white rounded">
                            <svg className="h-5 w-6 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg> Notas 
                            </button>
                        </Link>
                    </li>
                    <li className={router.pathname === "/streaming" ? "bg-green-800 p-2 rounded" : "p-2"}>
                        <Link href="/streaming">
                            <button className="text-white flex item center w-full text-white rounded">
                            <svg className="h-5 w-6 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> Streaming 
                            </button>
                        </Link>
                    </li>
                    <li className={router.pathname === "/filtros" ? "bg-green-800 p-2 rounded" : "p-2"}>
                        <Link href="/filtros">
                            <button className="text-white flex item center w-full text-white rounded">
                            <svg className="h-5 w-6 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg> Filtros 
                            </button>
                        </Link>
                    </li>
                    <li className={router.pathname === "/buscar" ? "bg-green-800 p-2 rounded" : "p-2"}>
                        <Link href="/buscar">
                            <button className="text-white flex item center w-full text-white rounded">
                            <svg className="h-5 w-6 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> Buscar 
                            </button>
                        </Link>
                    </li>
                    <li className={router.pathname === "/chat" ? "bg-green-800 p-2 rounded" : "p-2"}>
                        <Link href="/chat">
                           <button className="text-white flex item center w-full text-white rounded">
                           <svg className="h-5 w-6 mr-2 bg-red-700 rounded-full p-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg> Chat 
                           </button>
                        </Link>
                    </li>
                    {tipoUsuario !== 'monitorista' ? (
                        <li className={router.pathname === "/administrador" || router.pathname  === "/nuevacuenta" || router.pathname === "/listausuarios" || router.pathname === "/listaclientes" || router.pathname === "/nuevocliente"? "bg-green-800 p-2 rounded" : "p-2"}>
                        <Link href="/administrador">
                           <button className="text-white flex item center w-full text-white rounded">
                           <svg className="h-5 w-6 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> Administrador 
                           </button>
                        </Link>
                    </li>
                    ) : (
                        ""
                    ) }
                    
                </nav>
            </aside>
        );
    } else {
        if(!data || data && !data.obtenerUsuario) return router.push('/login');
    }


    
}

export default Sidebar;