const express = require('express');

 
const db = require('../Projects/projects-model');

const router = express.Router();



// POST request for projects
router.post('/', (req, res) => {
    db.add(req.body)
    .then(project => {
        res.status(201).json(project);
      })
    .catch(err => {
      res.status(500).json({ message: "Failed to store data" });
    });
});

//GET request for projects
router.get('/', (req, res) => {
    db.find()
    .then(project => {
        res.status(200).json(project);
    })
   .catch(error => {
       res.status(500).json({ message: "failed to get projects"}, error);
   });
});

// POST request for resources
router.post('/resources', (req, res) => {
    db.addResource(req.body)
    .then(resource => {
        res.status(201).json(resource);
      })
    .catch(error => {
      res.status(500).json({ message: "Failed to store data" }, error);
    });
});

//GET request for resources
router.get('/resources', (req, res) => {
    db.findResource()
    .then(resource => {
        res.status(200).json(resource);
    })
   .catch(error => {
       res.status(500).json({ message: "failed to get resources"}, error);
   });
});


// POST request for tasks
router.post('/tasks', (req, res) => {
    db.addTasks(req.body)
    .then(task => {
        res.status(201).json(task);
      })
    .catch(error => {
      res.status(500).json({ message: "Failed to store data" }, error);
    });
});

//GET request for tasks
router.get('/tasks', (req, res) => {
    db.findTasks()
    .then(task => {
        res.status(200).json(task);
    })
   .catch(error => {
       res.status(500).json({ message: "Failed to get tasks"}, error);
   });
});


  module.exports = router;
