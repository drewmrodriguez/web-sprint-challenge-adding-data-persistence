// build your `/api/tasks` router here
const express = require('express');
const Task = require('./model');
const { validatePost} = require('./middleware')

const router = express.Router()

router.get('/', (req, res, next) => {
    Task.getTasks()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(next);
});

router.post('/task', validatePost, (req, res, next) => {
    Task.createTask(req.body)
        .then(newtask => {
            res.status(201).json(newtask);
        })
        .catch(next);
});

module.exports = router;