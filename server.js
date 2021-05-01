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
const myPosts = require('./routes/myPosts');
const generalRoute = require('./routes/posts');
const createPostRoute = require('./routes/createPost');
const login = require('./routes/login');
const register = require('./routes/register');



app.use(cors());
app.use(express.json());

app.use('/myposts',myPosts);
app.use("/",generalRoute);
app.use('/createpost',createPostRoute);
app.use('/login',login)
app.use('/register', register);


app.listen(PORT,()=>{
    console.log(`listening to the port:  ${PORT}`);
})