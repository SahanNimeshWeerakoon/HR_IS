const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

router.post('/addProject', (req ,res) => {

    const newProject = new Project({
        name: req.body.name,
        description: req.body.description,
        client: req.body.client,
        deadline: req.body.deadline,
        developers: req.body.devs,
        status: req.body.status
    });
   
    newProject.save()
        .then(data => {
            return res.json({ success: true, data });
        })
        .catch(err => {
            console.log({ from: 'add project', err });
        });
});

router.get('/', (req, res)=>{
    Project.find({})
       .then(data => {
          res.json(data);
       })
       .catch((err)=>{
          console.log({from: 'fetch project', err});
       })
});

router.get('/find/:id', (req, res) => {
    Project.findOne({ _id: req.params.id })
       .then(data => {
          return res.json(data);
       })
       .catch(err => {
          console.log({from: 'find project', err});
       })
})

router.put('/:id', (req, res)=>{
    const id = req.params.id;
    const project = {
        name: req.body.name,
        description: req.body.description,
        client: req.body.client,
        deadline: req.body.deadline,
        developers: req.body.devs
    }

    Project.findOneAndUpdate({_id:id}, req.body)
        .then(data => {
            return res.json({status: true, data});
        })
        .catch((err)=>{
            console.log(err);
        });    
});



router.get('/ongoing', (req, res) => {
    const currDate = new Date();
    Project.find({ deadline: { $gt: currDate }, status: 0 })
        .then(projects => {
            return res.json(projects);
        })
        .catch(err => {
            console.log({ from: 'ongoing projects', err });
        });
});

router.get('/finished', (req, res) => {
    const currDate = new Date();
    Project.find({ deadline: { $lt: currDate }, status: 1 })
        .then(projects => {
            return res.json(projects);
        })
        .catch(err => {
            console.log({ from: 'finished projects', err });
        });
});

router.get('/unfinished', (req, res) => {
    const currDate = new Date();
    Project.find({ deadline: { $lt: currDate }, status: 0 })
        .then(projects => {
            return res.json(projects);
        })
        .catch(err => {
            console.log({ from: 'unfinished projects', err });
        });
});

module.exports = router;