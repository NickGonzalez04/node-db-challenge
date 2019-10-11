
exports.up = function(knex) {
  return knex.schema.
  createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable();
      tbl.text('Description', 255);
      tbl.boolean('Completed').notNullable().defaultTo(false);
  })
  .createTable('resources', tbl =>{
      tbl.increments();
      tbl.string('name', 128).notNullable();
      tbl.text('Description', 255);
      
  })
  .createTable('tasks', tbl => {
      tbl.increments();
      tbl.text('description', 128).notNullable();
      tbl.text('notes', 128);
      tbl.boolean('Completed').notNullable().defaultTo(false)
      tbl.integer('project_id')
      .references('id')
      .inTable('projects')
      .unsigned()
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
  .createTable('Project_Resources', tbl => {
    tbl.increments()
    tbl.integer('project_id')
        .references('id')
        .inTable('projects')
        .unsigned()
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    tbl.integer('resource_id')
       .references('id')
       .inTable('resources')
       .unsigned()
       .onUpdate('CASCADE')
       .onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('Project_Resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects');
};
