require("dotenv").config();
const express=require("express");
const port = process.env.PORT || 9000;
const app = express();
const userRouter = require("./routes/user.routes");
const cors = require("cors")

app.use(cors());
app.use(express.json());

app.use('/api/auth', userRouter)

app.listen(port, () => {
    console.log(`Server is running on: ${port}`);
})
