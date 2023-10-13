const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const dummyData = [
    {title: "hello world"}
];

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'))

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.once("open", () => {
    console.log("Connected to db");
});

app.get('/', (req,res) => {
    res.send(dummyData);
});

const authRouter = require('./v1/routes/auth');
const roleRouter = require("./v1/routes/role")
app.use('/v1/auth', authRouter);
app.use('/v1/role', roleRouter);


app.listen(5000, ()=> {
    console.log("listening on 5000");
});