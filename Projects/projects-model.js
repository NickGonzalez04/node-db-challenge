const db = require('../db-config.js');


module.exports = {
    find,
    add,
    findResource,
    addResource,
    findTasks,
    addTasks
};


function find(){
    return db('projects');
}


function add(project){
    return db('projects').insert(project)
}

function findResource(){
    return db('resources');
}

function addResource(resource){
    return db('resources').insert(resource);
}

function findTasks(){
    return db('tasks as t')
    .join('projects as p', 'p.id', '=', 't.project_id')
    .select('p.name', 'p.description', 't.Completed');
}

function addTasks(tasks){
    return db('tasks').insert(tasks)
}