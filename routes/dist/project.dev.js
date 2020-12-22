"use strict";

var express = require('express');

var router = express.Router();

var Project = require('../models/Project');

router.post('/addProject', function (req, res) {
  var newProject = new Project({
    name: req.body.name,
    description: req.body.description,
    client: req.body.client,
    deadline: req.body.deadline,
    developers: req.body.devs
  });
  newProject.save().then(function (data) {
    return res.json({
      success: true,
      data: data
    });
  })["catch"](function (err) {
    console.log({
      from: 'add project',
      err: err
    });
  });
});
router.get('/', function (req, res) {
  Project.find({}).then(function (data) {
    res.json(data);
  })["catch"](function (err) {
    console.log({
      from: 'fetch project',
      err: err
    });
  });
});
router.get('/find/:id', function (req, res) {
  Project.findOne({
    _id: req.params.id
  }).then(function (data) {
    return res.json(data);
  })["catch"](function (err) {
    console.log({
      from: 'find project',
      err: err
    });
  });
});
router.put('/:id', function (req, res) {
  var id = req.params.id;
  var project = {
    name: req.body.name,
    description: req.body.description,
    client: req.body.client,
    deadline: req.body.deadline,
    developers: req.body.devs
  };
  Project.findOneAndUpdate({
    _id: id
  }, req.body).then(function (data) {
    return res.json({
      status: true,
      data: data
    });
  })["catch"](function (err) {
    console.log(err);
  });
});
module.exports = router;