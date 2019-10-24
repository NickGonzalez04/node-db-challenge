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
    return db('tasks')
    .join('projects', 'projects.id', '=', 'tasks.project_id')
    .select('projects.name', 'projects.description', 'tasks.Completed');
}

function addTasks(tasks){
    return db('tasks').insert(tasks)
}