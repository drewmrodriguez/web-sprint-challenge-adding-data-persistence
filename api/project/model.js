// build your `Project` model here
const db = require('../../data/dbConfig')

function getProject() {
    return db('projects')
}

async function createProject(project) {
    return db('projects').insert(project)
}


module.exports = {
    getProject,
    createProject
}