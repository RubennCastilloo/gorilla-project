import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { gql, useMutation, useQuery } from '@apollo/client';
import Usuario from '../components/Usuario';
import {useEffect} from 'react';

const OBTENER_USUARIOS = gql`
    query obtenerUsuarios {
        obtenerUsuarios{
        id
        nombre
        apellido
        email
        tipoUsuario
        estadoUsuario
        }
    }
`;



const ListaUsuarios = () => {

    //Consulta de Apollo
    const {data, loading, error, startPolling, stopPolling} = useQuery(OBTENER_USUARIOS);

    useEffect(() => {
        startPolling(1000);
        return () => {
            stopPolling();
        }
    }, [startPolling, stopPolling])

    if(loading) return (
        <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    );


    //Routing
    const router = useRouter();

   

    


    return(
        <div>
            <Layout>
                <h1 className="text-2xl text-gray-800 font-light"> Lista de Usuarios </h1>
                <div className="mt-5">
                        <Link href="/nuevacuenta">
                            <button
                                type="button"
                                className="flex justify-center item center bg-green-600 py-2 px-4 text-white font-bold rounded text-xs uppercase"
                            >
                                Agregar Usuario <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
                            </button>
                        </Link>

                        <Link href="/administrador">
                            <button
                                type="button"
                                className="mt-4 flex justify-center item center bg-green-600 py-2 px-4 text-white font-bold rounded text-xs uppercase"
                            >
                                <svg className="h-4 w-4 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg> Regresar
                            </button>
                        </Link>

                    <div className="overflow-x-scroll">
                        <table className="table-auto shadow-md mt-10 w-full w-lg">
                            <thead className="bg-gray-500">
                                <tr className="text-white">
                                    <th className="w-1/5 py-2"> Nombre </th>
                                    <th className="w-1/5 py-2"> Tipo </th>
                                    <th className="w-1/5 py-2"> Estado </th>
                                    <th className="w-1/5 py-2"> Email </th>
                                    <th className="w-1/5 py-2"> Eliminar </th>
                                    <th className="w-1/5 py-2"> Editar </th>
                                </tr>
                                </thead>
                                <tbody className="bg-white text-center">
                                {data.obtenerUsuarios.map ( usuario => (
                                    <Usuario 
                                        key={usuario.id}
                                        usuario={usuario}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default ListaUsuarios;