const express = require('express');
const offerRouter = express.Router();
const { verifyToken } = require('../middleware/verifyToken');

const {addOfferController, updateOfferController, getAllOffercontroller} = require("../controllers/offer");

offerRouter.get("/alloffers",verifyToken,getAllOffercontroller);
offerRouter.post("/addoffer",verifyToken,addOfferController);
offerRouter.put("/updateoffer/:offerid",verifyToken,updateOfferController);

module.exports = offerRouter;