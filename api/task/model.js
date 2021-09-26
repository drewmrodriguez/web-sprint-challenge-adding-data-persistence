// build your `Task` model here
const db = require('../../data/dbConfig')

function getTasks() {
  return db('tasks')
}

async function getTaskById(task_id) {
  const task = await db('tasks')
    .where('task_id', task_id).first()
  return task
}

async function createTask(task) {
  const [id] = await db('tasks').insert(task)
  const newPost = await getTasks(id)
  return newPost
}


module.exports = {
  getTasks,
  getTaskById,
  createTask,
}