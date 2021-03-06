const express = require("express");
const router = express.Router();
const { newReport, getReport } = require("../controller/patient");

router.post("/:id/create_report", newReport);
router.post("/:id/all_report", getReport);

module.exports = router;
