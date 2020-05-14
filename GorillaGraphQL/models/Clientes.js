const mongoose = require('mongoose');

const ClientesSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    }, 
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    tipoUsuario: {
        type: String,
        required: true,
        trim: true
    },
    ingreso: {
        type: Date,
        default: Date.now()
    },
    telefono: {
        type: String,
        trim: true
    },
    estado: {
        type: String,
        trim: true,
        required: true
    },
    recibeCorreo: {
        type: String,
        trim: true,
        required: true
    },
    recibeWhatsapp: {
        type: String,
        trim: true,
        required: true
    },
    cliente: {
        type: String,
        trim: true,
        required: true
    }

});

module.exports = mongoose.model('Cliente', ClientesSchema);