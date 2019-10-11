const db = require('../db-config.js');


module.exports = {
    find,
    add,
    findResource,
    addResource
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
    return db('resources').insert(resource)
}