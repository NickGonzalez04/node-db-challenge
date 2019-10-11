const express = require('express');

const Projectsrouter = require('../Projects/projects-router');


const server = express();

server.use(express.json());
server.use('/api/projects', Projectsrouter);


// TEST Router
server.get('/', (req,res)=>{
    res.status(200).json({ message: 'In there like swim wear' });
})


module.exports = server;