const router = require("express").Router();
const Post = require("../models/Post");
const newPost = require("../models/NewPost");
const path = require("path");
const fs = require("fs");


router.get("/", async (req, res, next) => {
  try {
    res.send("connected with createPost");
  } catch {
    res.status(500).send("unable to connect to database");
  }
});

router.post("/", async (req, res, next) => {

  try {
    const reqPost = {
      author: req.body.name,
      mainTitle: req.body.mainTitle,
      mainSubtitle: req.body.mainSubtitle,
      mainText: req.body.mainText,
      photo: req.file.path,
    };

    

    const post = new newPost(reqPost);

    await post.save();
    await res.send(post);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
