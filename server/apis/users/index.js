const express = require("express");
const router = express.Router();
const routeUsers = require("./users");


router.use("/api", routeUsers);

module.exports = router;
