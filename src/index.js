const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();
const dummyData = [
    {title: "hello world"}
];

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'))

app.get('/', (req,res) => {
    res.send(dummyData);
});

app.listen(5000, ()=> {
    console.log("listening on 5000");
});