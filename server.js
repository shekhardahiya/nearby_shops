const express = require("express");
const placesRoute = require("./routes/places_route");

const app = express();
app.use(express.json());

app.use("/api", placesRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error:${err.message}`);
});

module.exports = app;
