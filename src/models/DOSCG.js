const { Client } = require("@googlemaps/google-maps-services-js");
const { getOr } = require("lodash/fp");
const env = require("../config/env");
const constants = require("../config/constants");

/**
 * Return possible route by origin and destination
 * @param {Object} - All possible parameters. ref: https://googlemaps.github.io/google-maps-services-js/modules/_directions_.html
 * @return {Array} - All possible routes which is get from Google Maps API., ref: https://googlemaps.github.io/google-maps-services-js/interfaces/_common_.directionsroute.html
 */
const getRoutes = async(params) => {
  const client = new Client({});

  const response = await client
    .directions({
      params: {
        key: env.GOOGLE_MAPS_API_KEY,
        ...params
      }
    });

  if (getOr(null, "data.status")(response) !== constants.GOOGLE_API_RESPONSE_OK) {
    throw new Error(getOr("GOOGLE API error", "data.error_message")(response));
  }

  return getOr([], "data.routes")(response);
};

module.exports = {
  getRoutes
};
