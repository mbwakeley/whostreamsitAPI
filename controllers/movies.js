const knex = require("../db/knex");

exports.getAllMovies = function(req, res) {
  knex("movies").then(movies => res.json(movies));
};

exports.getOneMovie = function(req, res) {
  knex("movies")
    .where("id", req.params.id)
    .then(movie => res.json(movie));
};

exports.addOneMovie = function(req, res) {
  knex("movies")
    .insert(req.body)
    .returning("*")
    .then(newMovie => res.json(newMovie));
};

exports.updateOneMovie = function(req, res) {
  knex("movies")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedMovie => res.json(updatedMovie));
};

exports.removeOneMovie = function(req, res) {
  knex("movies")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newMovie => res.json(newMovie));
};
