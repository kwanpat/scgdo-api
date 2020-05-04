const controllersDOSCG = require("../../src/controllers/DOSCG");
const modelsDOSCG = require("../../src/models/DOSCG");
const constants = require("../../src/config/constants");

const mockRoutes = [
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
modelsDOSCG.getRoutes = jest.fn(() => mockRoutes);

describe("Controller DOSCG.findingBestWays", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should return bestest routes", async() => {
    const result = await controllersDOSCG.findingBestWays();

    expect(modelsDOSCG.getRoutes).toHaveBeenCalledWith({
      origin: constants.LOCATION_LAT_LNG["scg-bangsue"],
      destination: constants.LOCATION_LAT_LNG["central-world"],
      departure_time: "now",
      alternatives: true
    });

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
