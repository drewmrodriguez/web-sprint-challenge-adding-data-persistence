const validatePost = (req, res, next) => {
    if (!req.body.project_name) {
        next({
            status: 400,
            message: "invalid project name"
        })
    } else {
        next()
    }
}

module.exports = {
    validatePost
}