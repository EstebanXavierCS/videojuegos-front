const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Videojuego = new Schema({
  titulo: { type: String, required: true },
  desarrollador: { type: String, required: true },
  plataforma: { type: String, required: true },
  anio: { type: Number, required: true },
  genero: { type: String, required: true }
});

module.exports = mongoose.model('Videojuego', Videojuego);