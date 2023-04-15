const express = require("express");
const router = express.Router();
const routeCheckout = require("./checkout");


router.use("/api", routeCheckout);

module.exports = router;
