import Head from 'next/head';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';
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

const Administrador = () => {

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

    if(data.obtenerUsuario !== null){
      const { nombre, apellido, email, tipoUsuario } = data.obtenerUsuario;
    

    // console.log(tipoUsuario);

    if(tipoUsuario !== 'administrador' && tipoUsuario !== 'sistemas') {
      return(
        <div>
          <Layout>
            <div className="flex justify-center mt-5">
              <h1 className="w-full max-w-sm text-2xl text-red-600 hover:text-red-700 cursor-pointer">No tienes acceso a esta area</h1>
            </div>
          </Layout>
        </div>
        
      );
    } else {

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
                          <Link href="/listaclientes">
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
  } else {
    return(
      <div>
        <Layout>
          <div className="flex justify-center mt-5">
            <h1 className="w-full max-w-sm text-2xl text-red-600 hover:text-red-700 cursor-pointer">Hubo un error al cargar el componente</h1>
          </div>
        </Layout>
      </div>
      
    );
  }
}

export default Administrador;