const mongoose = require('mongoose')
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    nombre: {
      type: String,
    },
    subtitulo: {
      type: String,
    },
    horas: {
      type: String,
    },
    precio: {
      type: Number,
    },
    pagos: {
      type: String,
    },
    caracteristicas: {
      type: String,
    },
    terminado: {
      type: String,
    },
  },
  {
    timestamps: true, //timestamps campos createdAt y updatedAt que se actualizarán automáticamente con la fecha y hora de creación
    versionKey: false, //el campo de versión no se debe incluir en los documentos almacenados.
  }
);

const ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel
