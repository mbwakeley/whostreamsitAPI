exports.up = function(knex, Promise) {
  return knex.schema.createTable("show_updates", table => {
    table.increments();
    table.integer("user_id").notNullable();
    table.integer("show_id").notNullable();
    table.text("content").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("show_updates");
};
