import Head from 'next/head';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Administrador = () => {
    const router = useRouter();

    return(
      <div>
        <Layout>
            <h1 className="text-2xl text-gray-800 font-light"> Administrador </h1>
           <div className="mt-5">
            <div className="overflow-x-scroll">
              <table className="table-auto shadow-md mt-10 w-full w-lg">
                <thead className="bg-gray-600">
                  <tr className="text-white">
                    <th className="w-1/5 py-2"> Admin Gorilla Media Monitoring</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-center">
                <tr>
                      <td className="border px-4 py-2">
                            <Link href="/listausuarios">
                                <button
                                    type="button"
                                    className="flex justify-center item center bg-green-600 py-2 px-4 w-full text-white font-bold rounded text-xs uppercase"
                                    // onClick={() => editarCliente()}
                                >
                                    
                                        Ir a Usuarios <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg>
                                    
                                </button>
                            </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">
                            <Link href="/nuevacuenta">
                                <button
                                    type="button"
                                    className="flex justify-center item center bg-green-600 py-2 px-4 w-full text-white font-bold rounded text-xs uppercase"
                                    // onClick={() => editarCliente()}
                                >
                                    
                                        Ir a Clientes <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg>
                                    
                                </button>
                            </Link>
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

export default Administrador;