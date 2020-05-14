import Head from 'next/head';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { gql, useMutation, useQuery } from '@apollo/client';
import Usuario from '../components/Usuario';

const OBTENER_USUARIOS = gql`
    query obtenerUsuarios {
        obtenerUsuarios{
        id
        nombre
        apellido
        email
        }
    }
`;

const ListaUsuarios = () => {

    //Consulta de Apollo
    const {data, loading, error} = useQuery(OBTENER_USUARIOS);

    if(loading) return 'Cargando...';


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
                                // onClick={() => editarProducto()}
                            >
                                Agregar Usuario <svg className="w-4 h-4 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
                            </button>
                        </Link>

                    <div className="overflow-x-scroll">
                        <table className="table-auto shadow-md mt-10 w-full w-lg">
                            <thead className="bg-gray-500">
                                <tr className="text-white">
                                    <th className="w-1/5 py-2"> Nombre </th>
                                    <th className="w-1/5 py-2"> Apellido </th>
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