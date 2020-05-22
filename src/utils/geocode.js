const request = require("request");
const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiZHZhcHJhc2FkIiwiYSI6ImNrOTFyeXFicDAwdzYzbG1wbmpoaWJpMHUifQ.R5vJlzhQdfWoo9GAXBeQJA&limit=1";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location Services!");
    } else if (response.body.features.length === 0) {
      callback("Invalid Location. Try with correct location");
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
