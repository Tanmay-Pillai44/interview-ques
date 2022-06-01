const express = require("express");
const authRouter = require("./routes/auth.route");
const port = 8000;
const app = express();

app.use(express.json());

app.use('/auth', authRouter);

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})