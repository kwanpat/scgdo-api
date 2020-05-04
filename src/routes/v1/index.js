const express = require("express");
const asyncWrapper = require("../../middlewares/async-wrapper");
const DOSCG = require("../../controllers/DOSCG");

const router = express.Router();

router.get(
  "/",
  (req, res) => {
    res.send({ health_check: new Date() });
  }
);

router.get(
  "/maps/bestways",
  asyncWrapper(async(req, res) => {
    res.send(await DOSCG.findingBestWays());
  })
);

module.exports = router;
