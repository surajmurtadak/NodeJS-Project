const express = require("express");
const {getUserController, postUserController, getTwoUserController,getOfferController, updateOfferController} = require("../controllers");
const router = express.Router();

router.get("/user",getUserController);
router.post("/user",postUserController);
router.get("/gettwouser",getTwoUserController);
router.post("/offer",getOfferController);
router.put("/offer",updateOfferController)
module.exports = router;