
exports.up = function(knex) {
  return knex.schema.createTable('zoos', table => {
    table.increments('id')
    table.string('name')
    table.unique('id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('zoos');
};
