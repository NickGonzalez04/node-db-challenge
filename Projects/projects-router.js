const express = require('express');

 
const db = require('../db-config');

const router = express.Router();




router.post('/', (req, res) => {
    const projectData = req.body;
    db('projects').insert(projectData)
    .then(project => {
        res.status(201).json(project);
      })
    .catch(err => {
      res.status(500).json({ message: "Failed to store data" });
    });
});


router.get('/', (req, res) => {
    db('projects')
    .then(project => {
        res.status(200).json(project);
    })
   .catch(error => {
       res.status(500).json({ message: "failed to get projects"}, error);
   });
});
  

  module.exports = router;
