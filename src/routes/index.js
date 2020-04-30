const express = require("express");
const env = require("../config/env");

const router = express.Router();

router.use("/v1", require("./v1"));

router.use("/", require(`./v${ env.DEFAULT_API_VERSION }`));

module.exports = router;
