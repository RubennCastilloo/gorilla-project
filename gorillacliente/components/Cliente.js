import React from 'react';
import Swal from 'sweetalert2';
import {gql, useQuery, useMutation } from '@apollo/client';
import Router, { useRouter } from 'next/router';

const OBTENER_CLIENTES = gql`
    query obtenerClientes {
        obtenerClientes{
            id
            nombre
            apellido
            email
            estado
            tipoUsuario
        }
    }
`;

const ELIMINAR_CLIENTE = gql`
    mutation eliminarCliente($id: ID!){
        eliminarCliente(id: $id)
    }
`;


const Cliente = ({cliente}) => {

    const [ eliminarCliente ] = useMutation(ELIMINAR_CLIENTE, {
        update(cache){
            const { obtenerClientes } = cache.readQuery({ query: OBTENER_CLIENTES});

            cache.writeQuery({
                query: OBTENER_CLIENTES,
                data: {
                    obtenerClientes : obtenerClientes.filter( clienteActual => clienteActual.id !== id)
                }
            })
        }
    });

    
    const { id, nombre, apellido, email, tipoUsuario, estado } = cliente;

    const confirmarEliminarCliente = () => {
        Swal.fire({
            title: 'Deseas eliminar a este cliente?',
            text: "Esta accion no se puede deshacer",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3E821C',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText: 'No, cancelar'
          }).then( async (result) => {
            if (result.value) {

                try {

                    //Eliminar por ID 
                    const { data } = await eliminarCliente({
                        variables: {
                            id
                        }
                    });
                    // console.log(data);
                    //Mostrar una alerta
                    Swal.fire(
                        'Eliminado!',
                        data.eliminarCliente,
                        'success'
                      )
                } catch (error) {
                    console.log(error);
                    Swal.fire(
                        'Error!',
                        `${error.message.replace('GraphQL error: ', '')}!`,
                        'error'
                      )
                }

              
            }
          })
    }

    const editarCliente = () => {
        Router.push({
            pathname: '/editarcliente/[id]',
            query: { id }
        })
    }


    return(
        <tr>
            <td className="border px-4 py-2">{nombre} {apellido}</td>
            <td className="border px-4 py-2 uppercase">{tipoUsuario}</td>
            {estado === 'activo' ? (
                <td className="border px-4 py-2 uppercase text-green-500">{estado}</td>
            ) : (
                <td className="border px-4 py-2 uppercase text-red-500">{estado}</td>
            )}
            <td className="border px-4 py-2">{email}</td>
            <td className="border px-4 py-2">
                <button
                    type="button"
                    className="flex justify-center item center bg-red-800 py-2 px-4 w-full text-white font-bold rounded text-xs uppercase"
                    onClick={() => confirmarEliminarCliente()}
                >
                    Eliminar <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 ml-2"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                </button>
            </td>
            <td className="border px-4 py-2">
                <button
                    type="button"
                    className="flex justify-center item center bg-green-600 py-2 px-4 w-full text-white font-bold rounded text-xs uppercase"
                    onClick={() => editarCliente()}
                >
                    Editar <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 ml-2"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                </button>
            </td>
        </tr>
    );
}

export default Cliente;