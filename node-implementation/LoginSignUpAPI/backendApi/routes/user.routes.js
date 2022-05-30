const express=require("express");
const { SignUpController, LoginController, UsersController } = require("../controllers/user.controller");
const { encryptPassword } = require("../middlewares/user.middleware");

const userRouter = express.Router();

userRouter.post('/signup', encryptPassword, SignUpController);
userRouter.post('/login', LoginController);
userRouter.get("/users", UsersController)

module.exports = userRouter;