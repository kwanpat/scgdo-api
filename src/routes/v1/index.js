const express = require("express");
const DOSCG = require("../../controllers/DOSCG");

const router = express.Router();

router.get(
    "/",
    (req, res) => {
        res.send(
            DOSCG.findingXYZValues()
        );
    }
);

module.exports = router;
