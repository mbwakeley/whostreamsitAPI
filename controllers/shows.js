const knex = require("../db/knex");

exports.getAllShows = function(req, res) {
  knex("shows").then(shows => res.json(shows));
};

exports.getOneShow = function(req, res) {
  knex("shows")
    .where("id", req.params.id)
    .then(show => res.json(show));
};

exports.addOneShow = function(req, res) {
  knex("shows")
    .insert(req.body)
    .returning("*")
    .then(newShow => res.json(newShow));
};

exports.updateOneShow = function(req, res) {
  knex("shows")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedShow => res.json(updatedShow));
};

exports.removeOneShow = function(req, res) {
  knex("shows")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newShow => res.json(newShow));
};
