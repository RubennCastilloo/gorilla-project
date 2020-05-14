const mongoose = require('mongoose');

const QuerysSchema = mongoose.Schema({
    empresa: {
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
    correos: {
        type: String,
        trim: true,
        required: true
    },
    whatsapps: {
        type: String,
        trim: true,
        required: true
    },
    tipo: {
        type: String,
        trim: true,
        required: true
    },
    querys : {
        type: Array,
    }

});

module.exports = mongoose.model('Query', QuerysSchema);