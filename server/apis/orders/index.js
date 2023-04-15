const express = require("express");
const router = express.Router();
const routeOrders = require("./orders");


router.use("/api", routeOrders);

module.exports = router;