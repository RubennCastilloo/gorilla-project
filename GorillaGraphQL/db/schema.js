const { gql } = require('apollo-server');

//Schema
const typeDefs = gql`

    #TYPES

    type Usuario {
        id: ID
        nombre: String
        apellido: String
        email: String
        tipoUsuario: String
        ingreso: String
        monitoreo: String
    }

    type Cliente {
        id: ID
        nombre: String
        apellido: String
        email: String
        tipoUsuario: tipoCliente
        ingreso: String
        telefono: String
        estado: String
        recibeCorreo: option
        recibeWhatsapp: option
        cliente: String
    }

    type Querys {
        id: ID
        empresa: String
        ingreso: String
        telefono: String
        estado: estadoCliente
        correos: option
        whatsapps: option
        tipo: String
        querys: [QuerysCliente]
    }

    type QuerysCliente {
        categoria: String
    }
    
    type Token {
        token: String
    }

    

    #INPUT

    input UsuarioInput {
        nombre: String!
        apellido: String!
        email: String!
        password: String!
        tipoUsuario: tipoUsuario!
        ingreso: String
        monitoreo: String!
    }

    input ClienteInput {
        nombre: String!
        apellido: String!
        email: String!
        password: String!
        tipoUsuario: tipoCliente!
        ingreso: String
        telefono: String!
        estado: estadoCliente!
        recibeCorreo: option!
        recibeWhatsapp: option!
        cliente: String!
    } 

    input QuerysInput {
        empresa: String!
        ingreso: String
        telefono: String
        estado: estadoCliente!
        correos: option!
        whatsapps: option!
        tipo: String!
        querys: [QuerysClienteInput]
    }

    input QuerysClienteInput {
        categoria: String!
    }

    input AutenticarInput {
        email: String!
        password: String!
    }

    #ENUM

    enum tipoUsuario {
        administrador
        monitorista
        sistemas
    }
    
    enum tipoCliente {
        administrador
        consulta
        captura
    }

    enum option {
        si
        no
    }

    enum estadoCliente {
        activo
        inactivo
    }


    #QUERY

    type Query {
        #Usuarios
        # obtenerUsuario(token: String!): Usuario
        obtenerUsuario: Usuario
        obtenerUsuarios : [Usuario]

        #Clientes 
        obtenerCliente(token: String!): Cliente
        obtenerClientes : [Cliente]

        #Querys
        obtenerQuery(id: ID!) : Querys
        obtenerQuerys : [Querys]
    }

    #MUTATION

    type Mutation {
        #Usuarios
        nuevoUsuario(input: UsuarioInput): Usuario
        autenticarUsuario(input: AutenticarInput) : Token
        actualizarUsuario(id: ID!, input: UsuarioInput) : Usuario
        eliminarUsuario(id: ID!) : String

        #Clientes
        nuevoCliente(input: ClienteInput) : Cliente
        autenticarCliente(input: AutenticarInput) : Token
        actualizarCliente(id: ID!, input: ClienteInput) : Cliente
        eliminarCliente(id: ID!) : String

        #Querys
        nuevoQuery(input: QuerysInput) : Querys
        actualizarQuerys(id: ID!, input: QuerysInput) : Querys
        eliminarQuerys(id: ID!) : String

        
    }

    
`;

module.exports = typeDefs;