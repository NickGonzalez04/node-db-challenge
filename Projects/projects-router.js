const express = require('express');

 
const db = require('../Projects/projects-model');

const router = express.Router();




router.post('/', (req, res) => {
    db.add(req.body)
    .then(project => {
        res.status(201).json(project);
      })
    .catch(err => {
      res.status(500).json({ message: "Failed to store data" });
    });
});


router.get('/', (req, res) => {
    db.find()
    .then(project => {
        res.status(200).json(project);
    })
   .catch(error => {
       res.status(500).json({ message: "failed to get projects"}, error);
   });
});
  

  module.exports = router;
