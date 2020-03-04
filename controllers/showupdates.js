const knex = require("../db/knex");

exports.getAllShowUpdates = function(req, res) {
  knex("show_updates").then(ShowUpdates => res.json(ShowUpdates));
};

exports.getOneShowUpdate = function(req, res) {
  knex("show_updates")
    .where("id", req.params.id)
    .then(ShowUpdate => res.json(ShowUpdate));
};

exports.addOneShowUpdate = function(req, res) {
  knex("show_updates")
    .insert(req.body)
    .returning("*")
    .then(newShowUpdate => res.json(newShowUpdate));
};

exports.removeOneShowUpdate = function(req, res) {
  knex("show_updates")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newShowUpdate => res.json(newShowUpdate));
};
