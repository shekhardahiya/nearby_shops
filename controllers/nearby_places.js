const axios = require("axios");
// W112AQ
// W112AW
// NE301DP
//BA100EP -- No restaurants nearby
exports.getNearbyPlaces = async (req, res, next) => {
  const zipCode = req.params.zipcode;
  await axios
    .get(`https://api.postcodes.io/postcodes/${zipCode}`)
    .then((resp) => {
      return axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=cruise&location=${resp.data.result.latitude}%2C${resp.data.result.longitude}&radius=1500&type=restaurant&key=AIzaSyBMkO1uY1ufGf-0ayQ9oNRXD2SjjL5WLes`
      );
    })
    .then((response) => {
      res.status(200).json({
        code: 200,
        message:
          Array.isArray(response.data.results) && response.data.results <= 0
            ? "No nearby restaurants found"
            : "Restaurants fetched successfully",

        data: response.data.results,
      });
    })
    .catch((error) => {
      res.status(404).json(error.response.data);
    });
};
