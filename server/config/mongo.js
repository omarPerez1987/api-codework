const mongoose = require("mongoose");

const dbConnect = async () => {
  const DB_URI = process.env.DB_URI;
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(DB_URI);
    console.log("**** CONEXION CORRECTA CON DB****");
  } catch (error) {
    console.error("**** ERROR CONEXION CON DB ****", error);
  }
};

module.exports = dbConnect;
