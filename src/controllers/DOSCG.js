const modelDOSCG = require("../models/DOSCG");
const constants = require("../config/constants");
const mapsUtil = require("../utils/maps");

/**
 * @return {Object} - Return bestest way at current time
 */
const findingBestWays = async() => {
  const result = await modelDOSCG.getRoutes({
    origin: constants.LOCATION_LAT_LNG["scg-bangsue"],
    destination: constants.LOCATION_LAT_LNG["central-world"],
    departure_time: "now",
    alternatives: true
  });
  return mapsUtil.getBestestRoute(result);
};

module.exports = {
  findingBestWays
};
