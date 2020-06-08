const mongoose = require('mongoose');

const NotasSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    contenido: {
        type: String,
        required: true,
        trim: true
    },
    autor: {
        type: String,
        trim: true
    },
    destacada: {
        type: String,
        trim: true
    },
    encuesta: {
        type: String,
        trim: true
    },
    banner: {
        type: String,
        trim: true
    },
    cartoon: {
        type: String,
        trim: true
    },
    estado: {
        type: String,
        trim: true,
        required: true
    },
    municipio: {
        type: String,
        trim: true,
        required: true
    },
    tipo: {
        type: String,
        trim: true,
        required: true
    },
    fuente: {
        type: String,
        trim: true,
        required: true
    },
    programa: {
        type: String,
        trim: true,
        required: true
    },
    link: {
        type: String,
        trim: true
    },
    portada: {
        type: String,
        trim: true
    },
    fotoPortada: {
        type: String,
        trim: true
    },
    pagina: {
        type: String,
        trim: true
    },
    seccion: {
        type: String,
        trim: true
    },
    desplegado: {
        type: String,
        trim: true
    },
    tamanio: {
        type: String,
        trim: true
    },
    testigo: {
        type: Array
    },
    fecha: {
        type: String,
        trim: true,
        required: true
    },
    categoria : {
        type: Array,
    },
    monitorista: {
        type: String,
        required: true,
        trim: true
    }

});

module.exports = mongoose.model('Nota', NotasSchema);