const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=cd7b0224d6ea19ec2e171ffbc4997db4&query=" +
    longitude +
    "," +
    latitude +
    "&units=f";
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!");
    } else if (response.body.error) {
      callback("Unable to find location");
    } else {
      const data = response.body.current;
      callback(
        undefined,
        data.weather_descriptions[0] +
          ". It is currently " +
          data.temperature +
          " degrees out. It feels like " +
          data.feelslike +
          " degrees out."
      );
    }
  });
};

module.exports = forecast;
