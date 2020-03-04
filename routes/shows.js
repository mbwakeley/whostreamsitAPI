const express = require("express");
const router = express.Router();
const showsController = require("../controllers/shows");

router.get("/", showsController.getAllShows);
router.get("/:id", showsController.getOneShow);
router.post("/", showsController.addOneShow);
router.patch("/:id", showsController.updateOneShow);
router.delete("/:id", showsController.removeOneShow);

module.exports = router;
