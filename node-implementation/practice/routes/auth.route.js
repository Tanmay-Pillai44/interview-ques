const express = require("express");
const { usersController, postsController } = require("../controllers/auth.controller");
const authRouter = express.Router();

authRouter.get('/users', usersController)

authRouter.post('/postroute', postsController)


module.exports = authRouter;