const { offer } = require("../models/offer");

// get all offer

module.exports.getAllOffercontroller = async (req, res) => {};

// Add new Offer

module.exports.addOfferController = async (req, res) => {
  const currentUser = req.authData._doc;

  if (currentUser.role === "admin") {
    let {
      offerId,
      title,
      restaurantId,
      quantity,
      claimedCount,
      pointsPerOffer,
    } = req.body;

    const availableOffer = await offer.findOne({ offerId });
    if (availableOffer) {
      res.status(409).json({ message: "please enter unique offerId" });
    } else {
      const newOffer = new offer({
        offerId,
        title,
        restaurantId,
        quantity,
        claimedCount,
        pointsPerOffer,
        name: currentUser.name,
      });
      newOffer.save();
      res.send(newOffer);
    }
  } else {
    res
      .status(401)
      .json({ message: " You are not authorised to add new offer." });
  }
};

module.exports.updateOfferController = async (req, res) => {
  const offerId = req.params.offerid;
  const newData = req.body;
  const currentUser = req.authData._doc;
  try {
    if (currentUser.role === "admin") {
      const updatedOffer = await offer.findOneAndUpdate(
        { offerId },
        { $set: { ...newData } },
        { new: true }
      );

      if (!updatedOffer) {
        res.status(404).json({ message: " offer not found" });
      }
      else{
        res.json({ updatedOffer });
      }
    } else {
      res
        .status(401)
        .json({ message: " You are not authorised to update offer." });
    }
  } catch (err) {
    res.status(500).json({ message: `Enternal server error : ${err}` });
  }
};
