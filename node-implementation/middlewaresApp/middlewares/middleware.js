const appLevelMiddleware = (req, res, next) => {

    console.log("I am App level Middleware")
    next();
}

const routesLevelMiddleware = (req, res, next) => {

    console.log("I am Routes level Middleware")
    next();
}

const routeLevelMiddleware = (req, res, next) => {

    console.log("I am Route level Middleware")
    next();
}

module.exports = {
    appLevelMiddleware,
    routesLevelMiddleware,
    routeLevelMiddleware
}