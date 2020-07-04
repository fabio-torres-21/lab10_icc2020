var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpleadoSchema = new Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, max: 60 },
    dni: { type: String, required: true, max: 8 },
    sexo: { type: String, required: true, max: 10 },
    telefono: { type: String, required: true, max: 9 },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);