const express = require("express");

const router = express.Router();
const placesController = require("../controllers/nearby_places");

router.route("/getNearby/:zipcode").get(placesController.getNearbyPlaces);

module.exports = router;
