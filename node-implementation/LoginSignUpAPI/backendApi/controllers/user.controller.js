require("dotenv").config();
const Users = require("../models/Users");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SignUpController = (req, res) => {

    const userExists = Users.find(ele => ele.email = req.body.email)

    if (userExists) {
        res.status(400).json({
            message: "User Already Exists"
        })
    }

    const user = Users.push(req.body)

    if(user) {
        res.status(201).json({
            message: "User successfully registered",
            data: Users
        })
    } else {
        res.status(400).json({
            message: "User has not registered, please try again"
        })
    }
}

const LoginController = (req, res) => {

    const { email, password } = req.body;

    const user = Users.find(ele => ele.email = email)

    if(user) {
        bcrypt.compare(password, user.password, function (err, result) {
            if (result == true) {
                const token = jwt.sign({ email: email }, process.env.SECRET)
                res.status(200).json({
                    message: "Logged In SuccessFully",
                    token: token,
                })
            } else {
                res.status(400).json({
                    message: "Wrong Password",
                })
            }
        })
    } else {
        res.status(400).json({
            message: "User Not Found",
        })
    }
}

const UsersController = (req, res) => {
    res.json({
        data: Users,
    })
}


module.exports = {
    SignUpController,
    LoginController,
    UsersController
}