const express = require("express");
const router = express.Router();
const showUpdatesController = require("../controllers/showupdates");

router.get("/", showUpdatesController.getAllShowUpdates);
router.get("/:id", showUpdatesController.getOneShowUpdate);
router.post("/", showUpdatesController.addOneShowUpdate);
router.delete("/:id", showUpdatesController.removeOneShowUpdate);

module.exports = router;
