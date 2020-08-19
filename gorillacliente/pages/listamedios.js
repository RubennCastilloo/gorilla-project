import Layout from '../components/Layout';
import Cliente from '../components/Cliente';
import { useRouter } from 'next/router';
import Link from 'next/link';



const ListaMedios = () => {

   


    //Routing
    const router = useRouter();

    return(
        <div>
            <Layout>
                <h1 className="text-2xl text-gray-800 font-light"> Lista de Medios </h1>
                <div className="mt-5">
                        <Link href="#">
                            <button
                                type="button"
                                className="flex justify-center item center bg-green-600 py-2 px-4 text-white font-bold rounded text-xs uppercase"
                            >
                                Agregar Tipo <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
                            </button>
                        </Link>

                        <Link href="/nuevomedio">
                            <button
                                type="button"
                                className="flex justify-center item center bg-green-600 py-2 px-4 text-white font-bold rounded text-xs uppercase mt-4"
                            >
                                Agregar Medio <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
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
                                    <th className="w-1/5 py-2"> Tipo </th>
                                    <th className="w-1/5 py-2"> Fuente </th>
                                    <th className="w-1/5 py-2"> Estado </th>
                                    <th className="w-1/5 py-2"> Eliminar </th>
                                    <th className="w-1/5 py-2"> Agregar Programa </th>
                                </tr>
                                </thead>
                                <tbody className="bg-white text-center">
                                <tr>
                                    <td className="border px-4 py-2">Radio</td>
                                    <td className="border px-4 py-2">860 Radio Noticias</td>
                                    <td className="border px-4 py-2 uppercase text-green-500">Activo</td>
                                    <td className="border px-4 py-2">
                                        <button
                                            type="button"
                                            className="flex justify-center item center bg-red-800 py-2 px-4 w-full text-white font-bold rounded text-xs uppercase"
                                            // onClick={() => confirmarEliminarCliente()}
                                        >
                                            Eliminar <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 ml-2"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                        </button>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <button
                                            type="button"
                                            className="flex justify-center item center bg-green-600 py-2 px-4 w-full text-white font-bold rounded text-xs uppercase"
                                            // onClick={() => editarCliente()}
                                        >
                                            Agregar Programa <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 ml-2"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Television</td>
                                    <td className="border px-4 py-2">Telediario Juarez</td>
                                    <td className="border px-4 py-2 uppercase text-green-500">Activo</td>
                                    <td className="border px-4 py-2">
                                        <button
                                            type="button"
                                            className="flex justify-center item center bg-red-800 py-2 px-4 w-full text-white font-bold rounded text-xs uppercase"
                                            // onClick={() => confirmarEliminarCliente()}
                                        >
                                            Eliminar <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 ml-2"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                        </button>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <button
                                            type="button"
                                            className="flex justify-center item center bg-green-600 py-2 px-4 w-full text-white font-bold rounded text-xs uppercase"
                                            // onClick={() => editarCliente()}
                                        >
                                            Agregar Programa <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 ml-2"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default ListaMedios;