const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env'});

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
                //Evitar errores en la terminal
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false, 
            useCreateIndex: true
        });
        console.log('');
        console.log('🗄️  La Base de Datos se encuentra conectada');
    } catch (error) {
        console.log('');
        console.log('❌  Hubo un error al conectar a la base de datos');
        console.log(error);
        process.exit(1); //Detener nuestra app
    }
}

module.exports = conectarDB;