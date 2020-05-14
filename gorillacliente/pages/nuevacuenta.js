import React, {useState} from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {gql, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';



const NUEVO_USUARIO = gql`
    mutation nuevoUsuario($input: UsuarioInput) {
        nuevoUsuario(input: $input) {
            id
            nombre
            apellido
            email
            ingreso
            tipoUsuario
            monitoreo
        }
    }
`;

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


const NuevaCuenta = () => {

    //Routing
    const router = useRouter();

    //State para el mensaje
    const [ mensaje, guardarMensaje ] = useState(null);

    const [ nuevoUsuario ] = useMutation(NUEVO_USUARIO, {
        update(cache, { data: { nuevoUsuario }}) {
            const { obtenerUsuarios } = cache.readQuery({ query: OBTENER_USUARIOS });

            cache.writeQuery({
                query: OBTENER_USUARIOS,
                data: {
                    obtenerUsuarios: [...obtenerUsuarios, nuevoUsuario]
                }
            })
        }
    });

    // Validacion del formulario
    const formik = useFormik({
        initialValues: {
            nombre: '',
            apellido: '',
            email: '',
            password: '',
            ConfirmarPassword: '',
            select: ''
        },
        validationSchema: Yup.object({
            nombre: Yup.string()
                        .required('El Nombre es obligatorio'),

            apellido: Yup.string()
                         .required('El Apellido es obligatorio'),

            email: Yup.string()
                      .email('El Email no es valido')
                      .required('El Email es obligatorio'),

            password: Yup.string()
                         .required('El Password es obligatorio')
                         .min(6, 'El password debe ser de al menos 6 caracteres'),

            ConfirmarPassword: Yup.string()
                        .required('El Password es obligatorio')
                        .oneOf([Yup.ref('password'), null], 'Los password deben de coincidir'),

            select: Yup.string()
                       .required('El Campo es obligatorio')
        }),
        onSubmit: async valores => {
            const {nombre, apellido, email, password, select } = valores;
            // console.log('enviando...');
            // console.log(valores);

            try {
                const {data} = await nuevoUsuario({
                    variables : {
                        input: {
                            nombre,
                            apellido,
                            email,
                            password,
                            tipoUsuario : select,
                            monitoreo: 'monitoreo'
                        }
                    }
                });
                console.log(data);

                //Usuario creado correctamente
                guardarMensaje(`Se creo correctamente el usuario: ${data.nuevoUsuario.nombre} ${data.nuevoUsuario.apellido}`);
                document.getElementById('form').reset();

                setTimeout(() => {
                    guardarMensaje(null);
                    router.push('/listausuarios');
                }, 1500);

                

                
            } catch (error) {
                guardarMensaje(error.message.replace('GraphQL error: ' , ''));
                setTimeout(() => {
                    guardarMensaje(null);
                }, 3000);
            }
        }
    });

    const mostrarMensaje = () => {
        return(
            <div className="bg-white py-2 px-3 w-full my-3 max-w-sm text-center mx-auto">
                <p>{mensaje}</p>
            </div>
        )
    }

    return(
        <>
            <Layout>

           

                <h1 className="text-2xl text-gray-800 font-light">Crear Nueva Cuenta</h1>
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
                <form
                            className="bg-white shadow-md px-8 pt-6 pb-8 mb-4"
                            onSubmit={formik.handleSubmit} 
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
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.nombre}
                                />
                            </div>

                            { formik.touched.nombre &&  formik.errors.nombre ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.nombre}</p>
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
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.apellido}
                                />
                            </div>

                            { formik.touched.apellido &&  formik.errors.apellido ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.apellido}</p>
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
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                            </div>

                            { formik.touched.email &&  formik.errors.email ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.email}</p>
                                </div>
                            ) : null }

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="Password Usuario"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                            </div>

                            { formik.touched.password &&  formik.errors.password ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.password}</p>
                                </div>
                            ) : null }

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ConfirmarPassword">
                                    Confirmar Password
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="ConfirmarPassword"
                                    type="password"
                                    placeholder="Confirmar Password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.ConfirmarPassword}
                                />
                            </div>

                            { formik.touched.ConfirmarPassword &&  formik.errors.ConfirmarPassword ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.ConfirmarPassword}</p>
                                </div>
                            ) : null }

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Tipo de Usuario
                                </label>
                                <select
                                    id="select"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.select}
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="administrador">ADMINISTRADOR</option>
                                    <option value="monitorista">MONITORISTA</option>
                                    <option value="sistemas">SISTEMAS</option>
                                </select>
                            </div>

                            { formik.touched.select &&  formik.errors.select ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.select}</p>
                                </div>
                            ) : null }
                        

                            <input 
                                type="submit"
                                className="bg-green-700 w-full mt-5 p-2 text-white uppercase hover:bg-green-800 cursor-pointer rounded"
                                value="Agregar Usuario"
                            />
                        </form>
                    </div>
                </div>
            </div>

            </Layout>
        </>
    );
}

export default NuevaCuenta;