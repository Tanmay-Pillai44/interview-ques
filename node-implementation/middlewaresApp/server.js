const express = require("express");
const port = 8000;
const authRouter = require("./routes/auth.route")
const { applevelMiddleware } = require("./middlewares/middleware")

const app = express();

app.use(applevelMiddleware);

app.use("/auth", authRouter);

app.listen(port, () => {
    console.log(`Server is running ${port}`);
})