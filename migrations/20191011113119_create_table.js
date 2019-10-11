
exports.up = function(knex) {
  return knex.schema.
  createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable();
      tbl.text('Description', 255);
      tbl.boolean('NULL');
  })
  .createTable('resources', tbl =>{
      tbl.increments();
      tbl.string('name', 128).notNullable();
      tbl.text('Description', 255);
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('resources')
  .dropTableIfExists('projects');
};
