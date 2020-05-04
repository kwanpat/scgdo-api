const { getOr, orderBy, head, compose } = require("lodash/fp");
const map = require("lodash/fp/map").convert({ cap: false });

/**
 * Return route which is lowest scores by distance, duration, duration in traffice calculated.
 * @param {Array} - All possible routes which is get from Google Maps API., ref: https://googlemaps.github.io/google-maps-services-js/interfaces/_common_.directionsroute.html
 * @return {Object} - One element from param which is lowest score by calculated
 */
const getBestestRoute = (routes) => {
  const ratingRotues = (route, indexRotue) => {
    const leg = getOr(0, "legs[0]")(route);
    const distanceValue = getOr(0, "distance.value")(leg);
    const durationValue = getOr(0, "duration.value")(leg);
    const durationInTrafficValue = getOr(0, "duration_in_traffic.value")(leg);

    const score = distanceValue + durationValue + durationInTrafficValue;

    return {
      index: `[${ indexRotue }].legs[0]`,
      score
    };
  };

  const lowestScore = compose(
    head,
    orderBy(["score"], ["asc"]),
    map(ratingRotues)
  )(routes);

  return getOr(null, lowestScore.index)(routes);
};

module.exports = {
    getBestestRoute
}
