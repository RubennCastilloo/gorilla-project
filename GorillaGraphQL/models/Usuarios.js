const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
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
    monitoreo: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Usuario', UsuariosSchema);