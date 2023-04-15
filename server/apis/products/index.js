const express = require("express");
const router = express.Router();
const routeProducts = require("./products");


router.use("/api", routeProducts);

module.exports = router;
