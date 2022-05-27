const express = require("express");
const authRouter = express.Router();
const { routesLevelMiddleware, routeLevelMiddleware } = require("../middlewares/middleware")

authRouter.use(routesLevelMiddleware);

authRouter.get('/route1', routeLevelMiddleware, (req, res) => {
    res.json({
        message: "I am route 1"
    })
})

authRouter.get('/route2', (req, res) => {
    res.json({
        message: "I am route 2"
    })
})

module.exports = authRouter;