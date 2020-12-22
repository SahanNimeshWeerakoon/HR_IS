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

module.exports = router;