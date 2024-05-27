const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const userRouter = require('./routes/user.route');
const Auth = require('./middlewares/Auth');

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/auth',
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    console.log("DB CONNECTED");
}).catch((error) => {
    console.log("FAILED TO CONNECT:", error);
})

app.use("/user", Auth, userRouter);

app.listen(8082,
    () => {
        console.log("SERVER STARTED");
    }
)