exports.up = function(knex, Promise) {
  return knex.schema.createTable("shows", table => {
    table.increments();
    table.string("title").notNullable();
    table.string("image").notNullable();
    table.text("genre").notNullable();
    table.text("description").notNullable();
    table.text("platform").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("shows");
};
