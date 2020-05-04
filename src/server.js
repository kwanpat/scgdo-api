const http = require("http");
const express = require("express");
const { logger, loggerExpress } = require("./utils/logger");
const env = require("./config/env");
const routes = require("./routes");

const app = express();
app.use(loggerExpress);

const httpServer = http.createServer(app);

app.use("/", routes);

httpServer.listen(env.PORT, () => {
  logger.info(`Server running on ${ httpServer.address().port }`);
});

module.exports = app;
