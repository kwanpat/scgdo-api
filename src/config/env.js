const envalid = require("envalid");

const { str, num } = envalid;

const options = {
  PORT: num({ default: 8000 }),
  LOG_LEVEL: str({ default: "info" }),
  DEFAULT_API_VERSION: num({ default: 1 }),
  GOOGLE_MAPS_API_KEY: str({ default: "" })
};

module.exports = envalid.cleanEnv(process.env, options);
