const Usuario = require('../models/Usuarios');
const Cliente = require('../models/Clientes');
const Query = require('../models/Querys');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env'});

const crearToken = (usuario, secreta, expiresIn) => {
    // console.log(usuario);
    const { id, email, nombre, apellido, tipoUsuario, monitoreo } = usuario;
    return jwt.sign( { id, email, nombre, apellido, tipoUsuario, monitoreo }, secreta, { expiresIn } );
}

const crearTokenCliente = (usuario, secreta, expiresIn) => {
    // console.log(usuario);
    const { id, email, nombre, apellido, tipoUsuario, estado, cliente } = usuario;
    return jwt.sign( { id, email, nombre, apellido, tipoUsuario, estado, cliente }, secreta, { expiresIn } );
}

//Resolvers
const resolvers = {
    Query: {
        obtenerUsuario: async (_, {}, ctx) => {
            // const usuarioId = await jwt.verify(token, process.env.SECRETA);

            return ctx.usuario;

        },
        obtenerUsuarios: async () => {
            try {
                const usuarios = await Usuario.find({});
                return usuarios;
            } catch (error) {
                console.log(error);
            }
        },
        obtenerCliente: async (_, { token }) => {
            const clienteId = await jwt.verify(token, process.env.SECRETA);

            return clienteId;
        },
        obtenerClientes: async () => {
            try {
                const clientes = await Cliente.find({});
                return clientes;

            } catch (error) {
                console.log(error);
            }
        },
        obtenerQuerys: async () => {
            try {
                const querys = await Query.find({});
                return querys;

            } catch (error) {
                console.log(error);
            }
        },
        obtenerQuery: async (_, { id }) => {
            const query = await Query.findById(id);
            if(!query) {
                throw new Error('La empresa no se encuentra registrada');
            }
            return query;
        }
    },
    Mutation: {
        nuevoUsuario: async (_, { input }) => {

            const {email, password } = input;
            
            //Revisar si el usuario ya esta registrado
            const existeUsuario = await Usuario.findOne({email});
            if(existeUsuario) {
                throw new Error('El usuario ya se encuentra registrado');
            }
            //Hashear su password
            const salt = await bcryptjs.genSalt(10);
            input.password = await bcryptjs.hash(password, salt);
            
            try {

                //Guardarlo en la Base de Datos
                const usuario = new Usuario(input);
                usuario.save();
                return usuario;

            } catch (error) {
                console.log(error);
            }
        },
        autenticarUsuario: async (_, {input}) => {

            const { email, password } = input;

            //Revisar si el usuario existe
            const existeUsuario = await Usuario.findOne({email});
            if(!existeUsuario) {
                throw new Error('El Usuario no existe');
            }

            //Revisar si el password es correcto
            const passwordCorrecto = await bcryptjs.compare(password, existeUsuario.password);
            if(!passwordCorrecto){
                throw new Error('El Password es Incorrecto');
            }
            //Crear el token
            return {
                token: crearToken(existeUsuario, process.env.SECRETA, '8h')
            }
        },
        eliminarUsuario: async (_, {id}, ctx) => {

            let usuario = await Usuario.findById(id);
            if(!usuario){
                throw new Error('El usuario no existe');
            }
            const credenciales = ctx.usuario.tipoUsuario;
            console.log(ctx.usuario.tipoUsuario.toString());

            if(ctx.usuario.tipoUsuario.toString() === 'monitorista'){
                throw new Error('No tienes las credenciales para realizar la accion');
            }

            await Usuario.findOneAndDelete({_id: id});
            return "Usuario Eliminado"

        },
        nuevoCliente: async (_, { input }) => {

            const {email, password } = input;
            
            //Revisar si el usuario ya esta registrado
            const existeCliente = await Cliente.findOne({email});
            if(existeCliente) {
                throw new Error('El usuario ya se encuentra registrado');
            }
            //Hashear su password
            const salt = await bcryptjs.genSalt(10);
            input.password = await bcryptjs.hash(password, salt);
            
            try {

                //Guardarlo en la Base de Datos
                const cliente = new Cliente(input);
                cliente.save();
                return cliente;

            } catch (error) {
                console.log(error);
            }
        },
        autenticarCliente: async (_, {input}) => {

            const { email, password } = input;

            //Revisar si el usuario existe
            const existeCliente = await Cliente.findOne({email});
            if(!existeCliente) {
                throw new Error('El Usuario no existe');
            }

            //Revisar si el password es correcto
            const passwordCorrecto = await bcryptjs.compare(password, existeCliente.password);
            if(!passwordCorrecto){
                throw new Error('El Password es Incorrecto');
            }
            //Crear el token
            return {
                token: crearTokenCliente(existeCliente, process.env.SECRETA, '8h')
            }
        },
        nuevoQuery: async (_, {input}) => {
            const { empresa } = input;
            //Verificar si la empresa ya se encuentra registrada
            const existeQueryEmpresa = await Query.findOne({empresa});
            if(existeQueryEmpresa) {
                throw new Error('La empresa ya se encuentra registrada');
            } 

            try {
                //Guardarlo en la Base de Datos
                const query = new Query(input);
                query.save();
                return query;

            } catch (error) {
                console.log(error);
            }

        },
        actualizarQuerys: async (_, { id, input }) => {
            
            //Verificar si el query existe
            let query = await Query.findById(id);
            if(!query){
                throw new Error('El Query no existe');
            }

            //Guardarlo en la base de datos
            query = await Query.findOneAndUpdate( {_id: id }, input, { new: true });
            return query;
        },
        eliminarQuerys: async (_, { id }) => {
            const query = await Query.findById(id);

            if(!query) {
                throw new Error('El ID no existe');
            }

            await Query.findOneAndDelete({_id: id});
            return 'Cuenta eliminada';

        }
    }
}

module.exports = resolvers;