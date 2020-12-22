const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

router.post('/addProject', (req ,res) => {

    const newProject = new Project({
        name: req.body.name,
        description: req.body.description,
        client: req.body.client,
        deadline: req.body.deadline,
        developers: req.body.devs
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
        })
    
        }
 
    )



module.exports = router;