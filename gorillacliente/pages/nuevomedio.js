import React, {useState} from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {gql, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';



// const NUEVO_USUARIO = gql`
//     mutation nuevoUsuario($input: UsuarioInput) {
//         nuevoUsuario(input: $input) {
//             id
//             nombre
//             apellido
//             email
//             ingreso
//             tipoUsuario
//             estadoUsuario
//             monitoreo
//         }
//     }
// `;

// const OBTENER_USUARIOS = gql`
//    query obtenerUsuarios {
//         obtenerUsuarios{
//             id
//             nombre
//             apellido
//             email
//         }
//     }
// `;


const NuevoMedio = () => {

    //Routing
    const router = useRouter();

    // //State para el mensaje
    // const [ mensaje, guardarMensaje ] = useState(null);

    // const [ nuevoUsuario ] = useMutation(NUEVO_USUARIO, {
    //     update(cache, { data: { nuevoUsuario }}) {
    //         const { obtenerUsuarios } = cache.readQuery({ query: OBTENER_USUARIOS });

    //         cache.writeQuery({
    //             query: OBTENER_USUARIOS,
    //             data: {
    //                 obtenerUsuarios: [...obtenerUsuarios, nuevoUsuario]
    //             }
    //         })
    //     }
    // });

    // Validacion del formulario
    const formik = useFormik({
        initialValues: {
            medio: ''
        },
        validationSchema: Yup.object({
            medio: Yup.string()
                        .required('El campo es obligatorio')
        }),
        // onSubmit: async valores => {
        //     const {medio} = valores;
        //     // console.log('enviando...');
        //     // console.log(valores);

        //     try {
        //         const {data} = await nuevoUsuario({
        //             variables : {
        //                 input: {
        //                     medio
        //                 }
        //             }
        //         });
        //         console.log(data);

        //         Swal.fire(
        //             'Creado Correctamente',
        //             `Se creo el usuario ${data.nuevoUsuario.nombre} ${data.nuevoUsuario.apellido}`,
        //             'success'
        //         )

        //         //Usuario creado correctamente
        //         // guardarMensaje(`Se creo correctamente el usuario: ${data.nuevoUsuario.nombre} ${data.nuevoUsuario.apellido}`);
        //         // document.getElementById('form').reset();

        //         setTimeout(() => {
        //             guardarMensaje(null);
        //             router.push('/listausuarios');
        //         }, 1500);

                

                
        //     } catch (error) {
        //         guardarMensaje(error.message.replace('GraphQL error: ' , ''));
        //         setTimeout(() => {
        //             guardarMensaje(null);
        //         }, 3000);
        //     }
        // }
    });

    // const mostrarMensaje = () => {
    //     return(
    //         <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 text-center">
    //             <p className="font-bold">Error</p>
    //             <p>{mensaje}</p>
    //         </div>
    //     )
    // }

    return(
        <>
            <Layout>

           

                <h1 className="text-2xl text-gray-800 font-light">Crear Nuevo Medio</h1>
                <div className="mt-5">
                        <Link href="/listamedios">
                            <button
                                type="button"
                                className="flex justify-center item center bg-green-600 py-2 px-4 text-white font-bold rounded text-xs uppercase"
                            >
                                <svg className="h-4 w-4 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg> Regresar
                            </button>
                        </Link>

                <div className="flex justify-center mt-5">
                <div className="w-full max-w-lg">
                {/* {mensaje && mostrarMensaje() } */}
                        <form
                            className="bg-white shadow-md px-8 pt-6 pb-8 mb-4"
                            // onSubmit={formik.handleSubmit} 
                            id="form"   
                        >
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medio">
                                    Nombre del Medio
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="medio"
                                    type="text"
                                    placeholder="Nombre Usuario"
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // value={formik.values.medio}
                                />
                            </div>

                            {/* { formik.touched.nombre &&  formik.errors.nombre ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.nombre}</p>
                                </div>
                            ) : null } */}

                           

                            <input 
                                type="submit"
                                className="bg-green-700 w-full mt-5 p-2 text-white uppercase hover:bg-green-800 cursor-pointer rounded"
                                value="Agregar Medio"
                            />
                        </form>
                    </div>
                </div>
            </div>

            </Layout>
        </>
    );
}

export default NuevoMedio;