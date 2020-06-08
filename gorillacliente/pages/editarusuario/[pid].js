import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {gql, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2'

const OBTENER_USUARIO = gql`
    query  obtenerUsuarioActualizar($id: ID!) {
        obtenerUsuarioActualizar(id: $id){
            id
            nombre
            apellido
            email
            tipoUsuario
            estadoUsuario
        }
    }
`;

const ACTUALIZAR_USUARIO = gql`
    mutation actualizarUsuario($id: ID!, $input: UsuarioInput){
        actualizarUsuario(id: $id, input: $input){
            nombre
            email
        }
    }
`;


const EditarCliente = () => {

    // Routing
    const router = useRouter();

    const [ mensaje, guardarMensaje ] = useState(null);

    const { query: { id } } = router;
    console.log(id);

    const { data, loading, error } = useQuery(OBTENER_USUARIO, {
        variables: {
            id
        }
    });

    const [ actualizarUsuario ] = useMutation(ACTUALIZAR_USUARIO);

    const schemaValidacion = Yup.object({
            nombre: Yup.string()
                        .required('El Nombre es obligatorio'),

            apellido: Yup.string()
                         .required('El Apellido es obligatorio'),

            email: Yup.string()
                      .email('El Email no es valido')
                      .required('El Email es obligatorio'),

            tipoUsuario: Yup.string()
                       .required('El Campo es obligatorio'),
            estadoUsuario: Yup.string()
                       .required('El Campo es obligatorio')
    });

    if(loading) return (
      <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
      </div>
  );

    console.log(data.obtenerUsuarioActualizar);

    const { obtenerUsuarioActualizar } = data;

    const actualizarInfoUsuario = async valores => {
        const { nombre, apellido, email, tipoUsuario, estadoUsuario } = valores;
        console.log(valores);
        try {
            const { data } = await actualizarUsuario({
                variables: {
                    id,
                    input: {
                        nombre,
                        apellido,
                        email,
                        tipoUsuario,
                        estadoUsuario
                    }
                }
            });

            Swal.fire(
                'Actualizado',
                'El usuario se actualizo correctamente',
                'success'
            )

            router.push('/listausuarios');

        } catch (error) {
            console.log(error);
            guardarMensaje(error.message.replace('GraphQL error: ' , ''));
                setTimeout(() => {
                    guardarMensaje(null);
                }, 3000);
        }
    }

    const mostrarMensaje = () => {
        return(
            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 text-center">
                <p className="font-bold">Error</p>
                <p>{mensaje}</p>
            </div>
            // <div className="bg-white py-2 px-3 w-full my-3 max-w-sm text-center mx-auto">
            //     <p>{mensaje}</p>
            // </div>
        )
    }

   
    return(
        <>
            <Layout>
                <h1 className="text-2xl text-gray-800 font-light">Editar Usuario</h1>
                <div className="mt-5">
                        <Link href="/listausuarios">
                            <button
                                type="button"
                                className="flex justify-center item center bg-green-600 py-2 px-4 text-white font-bold rounded text-xs uppercase"
                            >
                                <svg className="h-4 w-4 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg> Regresar
                            </button>
                        </Link>

                <div className="flex justify-center mt-5">
                <div className="w-full max-w-lg">
                {mensaje && mostrarMensaje() }

                    <Formik 
                        validationSchema = { schemaValidacion }
                        enableReinitialize
                        initialValues={ obtenerUsuarioActualizar }
                        onSubmit={ (valores) => {
                            actualizarInfoUsuario(valores);
                        }}
                    >
                        {props => {
                            // console.log(props);
                            return(
                                
                <form
                            className="bg-white shadow-md px-8 pt-6 pb-8 mb-4"
                            onSubmit={props.handleSubmit} 
                            id="form"   
                        >
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                                    Nombre
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre"
                                    type="text"
                                    placeholder="Nombre Usuario"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.nombre}
                                />
                            </div>

                            { props.touched.nombre &&  props.errors.nombre ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                    <p className="font-bold">Error</p>
                                    <p>{props.errors.nombre}</p>
                                </div>
                            ) : null }

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">
                                    Apellido
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="apellido"
                                    type="text"
                                    placeholder="Apellido Usuario"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.apellido}
                                />
                            </div>

                            { props.touched.apellido &&  props.errors.apellido ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                    <p className="font-bold">Error</p>
                                    <p>{props.errors.apellido}</p>
                                </div>
                            ) : null }

                            
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email Usuario"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.email}
                                />
                            </div>

                            { props.touched.email &&  props.errors.email ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                    <p className="font-bold">Error</p>
                                    <p>{props.errors.email}</p>
                                </div>
                            ) : null }

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipoUsuario">
                                    Tipo de Usuario
                                </label>
                                <select
                                    id="tipoUsuario"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.tipoUsuario}
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="administrador">ADMINISTRADOR</option>
                                    <option value="monitorista">MONITORISTA</option>
                                    <option value="sistemas">SISTEMAS</option>
                                </select>
                            </div>

                            { props.touched.tipoUsuario &&  props.errors.tipoUsuario ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                    <p className="font-bold">Error</p>
                                    <p>{props.errors.tipoUsuario}</p>
                                </div>
                            ) : null }

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="estadoUsuario">
                                    Estado Usuario
                                </label>
                                <select
                                    id="estadoUsuario"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.estadoUsuario}
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="activo">ACTIVO</option>
                                    <option value="inactivo">INACTIVO</option>
                                </select>
                            </div>

                            { props.touched.estadoUsuario &&  props.errors.estadoUsuario ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                    <p className="font-bold">Error</p>
                                    <p>{props.errors.estadoUsuario}</p>
                                </div>
                            ) : null }
                        

                            <input 
                                type="submit"
                                className="bg-green-700 w-full mt-5 p-2 text-white uppercase hover:bg-green-800 cursor-pointer rounded"
                                value="Editar Usuario"
                            />
                        </form> 
                        )
                    }}

                </Formik>
                    </div>
                </div>
            </div>

            </Layout>
        </>
    );
}

export default EditarCliente;