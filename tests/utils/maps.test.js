const mapsUtils = require("../../src/utils/maps");

describe("Maps util", () => {
  test("should return lowest score", () => {
    const routes = [
      {
        legs: [
          {
            distance: {
              value: 201
            },
            duration: {
              value: 202
            },
            duration_in_traffic: {
              value: 203
            }
          }
        ]
      },
      {
        legs: [{
          distance: {
            value: 101
          },
          duration: {
            value: 102
          },
          duration_in_traffic: {
            value: 103
          }
        }]
      }
    ];

    const result = mapsUtils.getBestestRoute(routes);

    expect(result).toEqual({
      distance: {
        value: 101
      },
      duration: {
        value: 102
      },
      duration_in_traffic: {
        value: 103
      }
    });
  });
});
