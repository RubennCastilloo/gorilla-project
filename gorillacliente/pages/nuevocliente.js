import React, {useState} from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {gql, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';



const NUEVO_CLIENTE = gql`
   mutation nuevoCliente($input: ClienteInput) {
        nuevoCliente(input: $input) {
            id
            nombre
            apellido
            email
            tipoUsuario
            ingreso
            telefono
            estado
            recibeCorreo
            recibeWhatsapp
            cliente
        }
    }
`;

const OBTENER_CLIENTES = gql`
   query obtenerClientes {
        obtenerClientes{
            id
            nombre
            apellido
            email
            estado
        }
    }
`;


const NuevaCuenta = () => {

    //Routing
    const router = useRouter();

    //State para el mensaje
    const [ mensaje, guardarMensaje ] = useState(null);

    const [ nuevoCliente ] = useMutation(NUEVO_CLIENTE, {
        update(cache, { data: { nuevoCliente }}) {
            const { obtenerClientes } = cache.readQuery({ query: OBTENER_CLIENTES });

            cache.writeQuery({
                query: OBTENER_CLIENTES,
                data: {
                    obtenerClientes: [...obtenerClientes, nuevoCliente]
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
            telefono: '',
            password: '',
            ConfirmarPassword: '',
            tipoUsuario: '',
            recibeCorreo: '',
            recibeWhatsapp: '',
            estado: ''


        },
        validationSchema: Yup.object({
            nombre: Yup.string()
                        .required('El Nombre es obligatorio'),

            apellido: Yup.string()
                         .required('El Apellido es obligatorio'),

            email: Yup.string()
                      .email('El Email no es valido')
                      .required('El Email es obligatorio'),

            telefono: Yup.number()
                         .typeError('Solo se aceptan números')
                         .required('El Teléfono es obligatorio')
                         .min(10, 'El Teléfono debe ser de al menos 10 caracteres'),          

            password: Yup.string()
                         .required('El Password es obligatorio')
                         .min(6, 'El password debe ser de al menos 6 caracteres'),

            ConfirmarPassword: Yup.string()
                        .required('El Password es obligatorio')
                        .oneOf([Yup.ref('password'), null], 'Los password deben de coincidir'),

            tipoUsuario: Yup.string()
                       .required('El Campo es obligatorio'),

            estado: Yup.string()
                       .required('El Campo es obligatorio'),

            recibeCorreo: Yup.string()
                       .required('El Campo es obligatorio'),

            recibeWhatsapp: Yup.string()
                       .required('El Campo es obligatorio')
        }),
        onSubmit: async valores => {
            const {nombre, apellido, email, telefono, password, tipoUsuario, recibeCorreo, recibeWhatsapp, estado } = valores;
            // console.log('enviando...');
            console.log(valores);

            try {
                const {data} = await nuevoCliente({
                    variables : {
                        input: {
                            nombre,
                            apellido,
                            email,
                            password,
                            tipoUsuario,
                            telefono,
                            estado,
                            recibeCorreo,
                            recibeWhatsapp,
                            cliente: 'cliente'
                        }
                    }
                });
                console.log(data);

                Swal.fire(
                    'Creado Correctamente',
                    `Se creo el usuario ${data.nuevoCliente.nombre} ${data.nuevoCliente.apellido}`,
                    'success'
                )

                //Usuario creado correctamente
                // guardarMensaje(`Se creo correctamente el usuario: ${data.nuevoUsuario.nombre} ${data.nuevoUsuario.apellido}`);
                // document.getElementById('form').reset();

                setTimeout(() => {
                    guardarMensaje(null);
                    router.push('/listaclientes');
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
            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 text-center">
                <p className="font-bold">Error</p>
                <p>{mensaje}</p>
            </div>
        )
    }

    return(
        <>
            <Layout>

           

                <h1 className="text-2xl text-gray-800 font-light">Crear Cuenta Cliente</h1>
                <div className="mt-5">
                        <Link href="/listaclientes">
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
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">
                                    Teléfono
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="telefono"
                                    type="tel"
                                    placeholder="Teléfono Usuario"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.telefono}
                                />
                            </div>

                            { formik.touched.telefono &&  formik.errors.telefono ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.telefono}</p>
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
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipoUsuario">
                                    Tipo de Usuario
                                </label>
                                <select
                                    id="tipoUsuario"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.tipoUsuario}
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="administracion">ADMINISTRACION</option>
                                    <option value="consulta">CONSULTA</option>
                                    <option value="captura">CAPTURA</option>
                                </select>
                            </div>

                            { formik.touched.tipoUsuario &&  formik.errors.tipoUsuario ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.tipoUsuario}</p>
                                </div>
                            ) : null }

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="estado">
                                    Estado Cliente
                                </label>
                                <select
                                    id="estado"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.estado}
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="activo">ACTIVO</option>
                                    <option value="inactivo">INACTIVO</option>
                                </select>
                            </div>

                            { formik.touched.estado &&  formik.errors.estado ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.estado}</p>
                                </div>
                            ) : null }

                        <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recibeCorreo">
                                    Recibe Correo
                                </label>
                                <select
                                    id="recibeCorreo"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.recibeCorreo}
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="si">SI</option>
                                    <option value="no">NO</option>
                                </select>
                            </div>

                            { formik.touched.recibeCorreo &&  formik.errors.recibeCorreo ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.recibeCorreo}</p>
                                </div>
                            ) : null }

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recibeWhatsapp">
                                    Recibe Whatsapp
                                </label>
                                <select
                                    id="recibeWhatsapp"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.recibeWhatsapp}
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="si">SI</option>
                                    <option value="no">NO</option>
                                </select>
                            </div>

                            { formik.touched.recibeWhatsapp &&  formik.errors.recibeWhatsapp ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.recibeWhatsapp}</p>
                                </div>
                            ) : null }
                        

                            <input 
                                type="submit"
                                className="bg-green-700 w-full mt-5 p-2 text-white uppercase hover:bg-green-800 cursor-pointer rounded"
                                value="Agregar Cliente"
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