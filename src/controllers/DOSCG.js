const modelDOSCG = require("../models/DOSCG");

const findingXYZValues = () => {
    const name = modelDOSCG.initalGoogleMapsClient();
    return name;
};

const findingBCValues = () => {
    const name = "John";
    return name;
};

const findingBestWay = () => {
    const name = "John";
    return name;
};

module.exports = {
    findingXYZValues,
    findingBCValues,
    findingBestWay
};
