const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const dbConnect = require("./server/config/mongo");
const routerUser = require("./server/apis/users/index.js");
const routerProducts = require("./server/apis/products/index.js");
const routerCheckout = require("./server/apis/checkout/index.js");
const routerOrders = require("./server/apis/orders/index.js");

//CREAR INSTANCIA
const app = express();

//HABILITAR CORS
app.use(cors());

// ENCABEZADOS DE SEGURIDAD RECOMENDADOS
app.use(helmet());

//.env
dotenv.config();

//DB CONEXION
dbConnect();

//bodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: "true" }));

//RUTAS
app.use(routerUser);
app.use(routerProducts);
app.use(routerCheckout);
app.use(routerOrders);

//escuchar solicitudes
const PORT = process.env.PORT;

if (PORT) {
  app.listen(PORT, () => {
    console.log(`aplicacion corriendo ${PORT}`);
  });
}

module.exports = app;