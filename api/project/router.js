// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')
const { validatePost } = require('./middleware')

const router = express.Router()

router.get('/', (req, res, next) => {
    Project.getProject()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(next)
})

router.post('/', validatePost, (req, res, next) => {
    Project.createProject(req.body)
        .then(newProject => {
            if (newProject.project_completed === 0) {
                newProject.project_completed = false
            } else {
                newProject.project_completed = true
            }
            res.status(201).json(newProject)
        })
        .catch(next)
})

module.exports = router;