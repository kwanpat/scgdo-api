const modelDOSCG = require("../../src/models/DOSCG");

let mockStatus = "OK";

jest.mock("@googlemaps/google-maps-services-js", () => ({
  Client: jest.fn().mockImplementation(() => ({
    directions: () => ({
      data: {
        status: mockStatus,
        routes: [{
          summary: "Mock route"
        }],
        error_message: "mock error message"
      }

    })
  }))
}));

describe("Models DOSCG", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should return routes from Google Maps API", async() => {
    const params = {
      origin: [ 123, 456 ],
      destination: [ 789, 98 ]
    };
    const result = await modelDOSCG.getRoutes(params);

    expect(result).toEqual([{ summary: "Mock route" }]);
  });

  test("should throws errors", async() => {
    mockStatus = "Error";
    const params = {
      origin: [ 123, 456 ],
      destination: [ 789, 98 ]
    };

    try {
      await modelDOSCG.getRoutes({ params });
    } catch (error) {
      expect(error).toEqual(new Error("mock error message"));
    }
  });
});
