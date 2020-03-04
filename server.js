const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const cors = require("cors");
const logger = require("morgan");
const knexInstance = require("./db/knex");
const { Model } = require("objection");

const showRoutes = require("./routes/shows");
const movieRoutes = require("./routes/movies");
const userRoutes = require("./routes/users");
const showUpdateRoutes = require("./routes/showupdates");

Model.knex(knexInstance);

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/shows", showRoutes);
app.use("/movies", movieRoutes);
app.use("/users", userRoutes);
app.use("/showupdates", showUpdateRoutes);

app.listen(port, function() {
  console.log("listening on port: ", port);
});
