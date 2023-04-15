const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    usuarioID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    productos: [
      {
        productoID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
        nombre: String,
        precio: Number,
        fechaEntrega: Number,
      },
    ],
  },
  {
    timestamps: true, //timestamps campos createdAt y updatedAt que se actualizarán automáticamente con la fecha y hora de creación
    versionKey: false, //el campo de versión no se debe incluir en los documentos almacenados.
  }
);

const OrderModel = mongoose.model("Pedido", OrderSchema);

module.exports = OrderModel;
