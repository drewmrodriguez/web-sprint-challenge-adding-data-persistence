const validatePost = (req, res, next) => {
    if (!req.body.task_description || !req.body.project_id) {
        next({
            status: 400,
            message: "missing task description or project id"
        })
    } else {
        next()
    }

}


module.exports = {
    validatePost
}