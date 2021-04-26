const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 4000;
const URL = process.env.URL;

mongoose.connect(
    URL,{ useNewUrlParser: true, useUnifiedTopology: true },
    ()=>{
        console.log('connected with DB')
    }
)
const generalRoute = require('./routes/posts');
const createPostRoute = require('./routes/createPost');


app.use(cors());
app.use(express.json());

app.use("/",generalRoute);
app.use('/createpost',createPostRoute);

app.listen(PORT,()=>{
    console.log(`listening to the port:  ${PORT}`);
})