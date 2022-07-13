/* Mongoose proporciona una solución sencilla basada en esquemas para modelar los datos de la aplicación,
conectandose a un servidor MongoDB (local o cloud)
comando para instalar:        npm install mongoose --save    */
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Austin_V:211854758av@cluster0.lmdaotg.mongodb.net/Codelco?retryWrites=true&w=majority')
//mongoose.connect('mongodb://127.0.0.1/Codelco')       //conexión local a BD zoologico
    .then(db => console.log('Bien... BD conectada'))
    .catch(err => console.error(err));