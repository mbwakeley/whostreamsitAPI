const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/movies");

router.get("/", moviesController.getAllMovies);
router.get("/:id", moviesController.getOneMovie);
router.post("/", moviesController.addOneMovie);
router.patch("/:id", moviesController.updateOneMovie);
router.delete("/:id", moviesController.removeOneMovie);

module.exports = router;
