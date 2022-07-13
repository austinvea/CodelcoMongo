const mongoose = require('mongoose');    //requerimos de mongoose para utilizar el esquema
const { Schema } = mongoose;

const ContratosSchema = new Schema({      //se define el equema de los animales
    nombre: String,
    apellido: String,
    email: String,
    area: String
});

module.exports = mongoose.model('Contratos', ContratosSchema);  //se exporta el modelo de esquema 
                                                              //para la coleccion de Animales