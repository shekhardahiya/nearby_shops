const express = require("express");

const { getNearbyPlaces } = require("../controllers/nearby_places");

const router = express.Router();

router.get("/getNearby/:zipcode", getNearbyPlaces);

module.exports = router;
