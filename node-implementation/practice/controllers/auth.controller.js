const usersController = (req, res) => {
    res.json({
        message: "I am users data"
    })
}

const postsController = (req, res) => {
    res.json(req.body)
}

module.exports = {
    usersController,
    postsController
}