
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
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');


  })
  .createTable('tasks', tbl => {
      tbl.increments();
      tbl.text('description', 128).notNullable();
      tbl.text('notes', 128);
      tbl.boolean('NULL');
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('resources')
  .dropTableIfExists('projects');
};
