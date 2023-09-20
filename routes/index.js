const express = require("express");
const homeController = require("../controllers");
const router = express.Router();

router.get("/",homeController);

module.exports = router;