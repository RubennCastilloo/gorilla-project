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
        estadoUsuario: String
    }

    type Cliente {
        id: ID
        nombre: String
        apellido: String
        email: String
        tipoUsuario: String
        ingreso: String
        telefono: String
        estado: String
        recibeCorreo: String
        recibeWhatsapp: String
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

    type Nota {
        id: ID
        titulo: String
        contenido: String
        autor: String
        destacada: String
        encuesta: String
        banner: String
        cartoon: String
        estado: String
        municipio: String
        tipo: String
        fuente: String
        programa: String
        link: String
        portada: String
        fotoPortada: String
        pagina: String
        seccion: String
        desplegado: String
        tamanio: String
        testigo: String
        fecha: String
        categoria: String
        monitorista: String
    }

    type QuerysCliente {
        categoria: String
    }
    
    type Token {
        token: String
    }

    

    #INPUT

    input UsuarioInput {
        nombre: String
        apellido: String
        email: String
        password: String
        tipoUsuario: tipoUsuario
        estadoUsuario: estadoUsuario
        ingreso: String
        monitoreo: String
    }

    input ClienteInput {
        nombre: String
        apellido: String
        email: String
        password: String
        tipoUsuario: tipoCliente
        ingreso: String
        telefono: String
        estado: estadoCliente
        recibeCorreo: option
        recibeWhatsapp: option
        cliente: String
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

    input NotasInput {
        id: ID
        titulo: String
        contenido: String
        autor: String
        destacada: option
        encuesta: option
        banner: option
        cartoon: option
        estado: String
        municipio: String
        tipo: String
        fuente: String
        programa: String
        link: String
        portada: option
        fotoPortada: option
        pagina: String
        seccion: String
        desplegado: option
        tamanio: String
        testigo: [TestigoInput]
        fecha: String
        categoria: [CategoriaInput]
        monitorista: String
    }

    input TestigoInput {
        fecha: String
        nombre: String

    }

    input CategoriaInput {
        tipo: String
        categoria: String
        calificacion: String
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
        administracion
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
    enum estadoUsuario {
        activo
        inactivo
    }


    #QUERY

    type Query {
        #Usuarios
        # obtenerUsuario(token: String!): Usuario
        obtenerUsuarioActualizar(id: ID!): Usuario
        obtenerUsuario: Usuario
        obtenerUsuarios : [Usuario]

        #Clientes 
        obtenerClienteActualizar(id: ID!): Cliente
        obtenerCliente: Cliente
        obtenerClientes : [Cliente]

        #Querys
        obtenerQuery(id: ID!) : Querys
        obtenerQuerys : [Querys]

        #Notas
        obtenerNota(id: ID) : Nota
        obtenerNotas : [Nota]
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

        #Notas
        nuevaNota(input: NotasInput) : Nota
        actualizarNota(id: ID!, input: NotasInput) : Nota
        eliminarNota(id: ID!) : String

        
    }

    
`;

module.exports = typeDefs;