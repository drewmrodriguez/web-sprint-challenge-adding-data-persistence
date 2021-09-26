const project = [
  { project_name: "project name"},
  { project_name: 'project name_2', project_description: 'project desc_2' },
  { project_name: "project name_3", project_description: "project desc_3", project_completed: 1 }
]

const resource = [
  { resource_name: "resource name"},
  { resource_name: "resource name_2", resource_description: "resource desc_2" }
]

const task = [
  { task_description: 'task desc', project_id: 1 },
  { task_description: 'task desc', task_notes: 'task notes', project_id: 1 },
  { task_description: "task desc_2", task_notes: "task notes_2", task_completed: 1, project_id: 2 }
]

exports.seed = async function (knex) {
  await knex('projects').insert(project)
  await knex('resources').insert(resource)
  await knex('tasks').insert(task)
}